import axios from 'axios'

export const getAllTournaments = () => {
    return axios.get('https://api.pandascore.co/tournaments?token=vQZeP5I4e_oFj5g8ixMW6s4fi7HmTYSF3bviRp69GgekbEKCDHw')
}

export const getTournamentsByTime = (time) => {
    return axios.get(`https://api.pandascore.co/tournaments/${time}?token=vQZeP5I4e_oFj5g8ixMW6s4fi7HmTYSF3bviRp69GgekbEKCDHw`)
}

export const getLolTeams = () => {
    return axios.get('https://api.pandascore.co/lol/teams?token=vQZeP5I4e_oFj5g8ixMW6s4fi7HmTYSF3bviRp69GgekbEKCDHw')
}

export const getWorldsInfo = () => {
    return axios.get('https://api.pandascore.co/series/2987/tournaments?token=vQZeP5I4e_oFj5g8ixMW6s4fi7HmTYSF3bviRp69GgekbEKCDHw')
}

export const getTeamRoster = (id) => {
    return axios.get(`https://api.pandascore.co/teams/${id}?token=vQZeP5I4e_oFj5g8ixMW6s4fi7HmTYSF3bviRp69GgekbEKCDHw`)
}

export const postLoginInfo = (user) => {
    return axios.post('http://localhost:3005/users', user)
}

export const getAllUsers = (user) => {
    return axios.get('http://localhost:3005/users', user)
}
