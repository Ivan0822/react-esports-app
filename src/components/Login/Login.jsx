import { Button, Input } from '@material-ui/core';
import React, { useState } from 'react';
import { v1 as uuidv1 } from 'uuid'
import { getAllUsers, postLoginInfo } from '../../services';
import { LoginSmallContainer, LoginLargeContainer } from './Login.elements';

const Login = ({ setLogged }) => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(false)

    const isValid = () => {
        if (username.trim().length === 0 || password.trim().length === 0) {
            return true
        }
        else return false
    }

    const isDuplicate = (username, array) => {
        return array.findIndex(user => user.username === username) !== -1
    }

    const isAuthenticated = (username, password, array) => {
        return array.findIndex(user => user.username === username && user.password === password) !== -1
    }


    const sendUserDetails = () => {
        const user = {
            id: uuidv1(),
            username: username,
            password: password,
        }
        getAllUsers().then(res => {
            if (isDuplicate(username, res.data) === true) {
                if (isAuthenticated(username, password, res.data) === true) {
                    setLogged(true)
                }
                else {
                    setError(true)
                }
            }
            else if (isValid()) {
                setError(true)
            }
            else if (!isValid()) {
                postLoginInfo(user)
                setLogged(true)
            }
        })
    }

    const handleLogin = (e) => {
        e.preventDefault()
        sendUserDetails()
    }

    return (
        <LoginLargeContainer>
            <LoginSmallContainer>
                <h3>LOGIN</h3>
                <form onSubmit={handleLogin} >
                    <Input onChange={(e) => setUsername(e.target.value)} required placeholder="Username" />
                    <Input onChange={(e) => setPassword(e.target.value)} required type="password" placeholder="Password" />
                    <Button type="submit" variant="contained" color="secondary">
                        LOGIN
                </Button>
                    {error ? <p style={{ color: 'red' }}>Invalid input</p> : null}
                </form>
            </LoginSmallContainer>
        </LoginLargeContainer>
    )
}

export default Login