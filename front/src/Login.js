import React from 'react'
import {Container} from "react-bootstrap"
const scopes = 'user-read-private user-read-email playlist-modify-public user-modify-playback-state';
const my_client_id="69fd0269e34e4f70bc3870d4c6e364fa";
const redirect_uri ="http://localhost:3000"
const AUTH_URL = `https://accounts.spotify.com/authorize?response_type=code&client_id=${my_client_id}&scope=${encodeURIComponent(scopes)}&redirect_uri=${encodeURIComponent(redirect_uri)}`

function Login() {
    return (
        <Container className="d-flex justify-content-center align-items-center" style={{minHeight:"100vh"}}>
            
        </Container>
    )
}

export default Login
