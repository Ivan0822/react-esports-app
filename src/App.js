import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom'
import { GlobalStyle } from './globalStyles'
import EventFilter from './components/EventFilter/EventFilter';
import Navbar from './components/Navbar/Navbar';
import EventList from './components/EventList/EventList'
import { getAllTournaments } from './services';
import Teams from './components/Teams/Teams';
import Login from './components/Login/Login';
import MyTeams from './components/MyTeams/MyTeams';
import MyTeamRoster from './components/MyTeams/MyTeamRoster/MyTeamRoster';

export const getUniqueArray = (array) => {
  let tmp = []
  array.filter((item) => {
    let index = tmp.findIndex(el => el.serie_id === item.serie_id)
    if (index <= -1) {
      tmp.push(item)
    }
    return null
  })
  return tmp
}

function App() {

  const [tourArray, setTourArray] = useState([])
  const [allTournaments, setAllTournaments] = useState([])
  const [favTeams, setFavTeams] = useState([])

  useEffect(() => {
    getAllTournaments().then(res => {
      console.log(res.data);
      setAllTournaments(getUniqueArray(res.data))
      setTourArray(getUniqueArray(res.data))
    })

  }, [])

  const [logged, setLogged] = useState(false)

  return (
    <>
      {logged ?
        <Router basename="/react-esports-app">
          <GlobalStyle />
          <Navbar setLogged={setLogged} />
          <Switch>
            <Route exact path="/">
              <EventFilter tourArray={tourArray} setTourArray={setTourArray} allTournaments={allTournaments} />
              <EventList tourArray={tourArray} />
            </Route>
            <Route path="/teams">
              <Teams favTeams={favTeams} setFavTeams={setFavTeams} />
            </Route>
            <Route exact path="/myteams">
              <MyTeams favTeams={favTeams} setFavTeams={setFavTeams} />
            </Route>
            <Route path="/myteams/:id">
              <MyTeamRoster favTeams={favTeams} />
            </Route>
          </Switch>
        </Router>
        :
        <Login setLogged={setLogged} />}
    </>
  );
}

export default App;
