import { Button, Input } from '@material-ui/core';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { v1 as uuidv1 } from 'uuid'
import { getAllUsers, postLoginInfo } from '../../services';
import { LoginSmallContainer, LoginLargeContainer } from './Login.elements';

const Login = ({ setLogged }) => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(false)

    const history = useHistory()

    const validateInput = () => {
        if (username.trim().length === 0 || password.trim().length === 0) {
            setError(true)
            return true
        }
        else return false
    }

    const sendUserDetails = () => {
        const user = {
            id: uuidv1(),
            username: username,
            password: password,
            teams: []
        }
        getAllUsers().then(res => {
            res.data.forEach(el => {
                if (el.username === user.username) {
                    setError(true)
                }
            })
        })
        if (!validateInput() && error === false) {
            postLoginInfo(user)
            setError(false)
            setLogged(true)
        }
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