import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, BrowserRouter, HashRouter } from 'react-router-dom'
import { GlobalStyle } from './globalStyles'
import EventFilter from './components/EventFilter/EventFilter';
import Navbar from './components/Navbar/Navbar';
import EventList from './components/EventList/EventList'
import { getAllTournaments } from './services';
import Worlds from './components/Worlds/Worlds';
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
      setAllTournaments(getUniqueArray(res.data).slice(0, 20))
      setTourArray(getUniqueArray(res.data).slice(0, 20))
    })

  }, [])

  const [logged, setLogged] = useState(false)

  return (
    <>
      {logged ?
        <HashRouter>
          <GlobalStyle />
          <Navbar setLogged={setLogged} />
          <Switch>
            <Route exact path="/">
              <EventFilter tourArray={tourArray} setTourArray={setTourArray} allTournaments={allTournaments} />
              <EventList tourArray={tourArray} />
            </Route>
            <Route path="/worlds">
              <Worlds />
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
        </HashRouter>
        :
        <Login setLogged={setLogged} />}
    </>
  );
}

export default App;
