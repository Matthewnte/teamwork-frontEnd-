import React from 'react';
import { Container, CssBaseline } from '@material-ui/core'

import Navbar from '../components/Navbar'

function Home() {
    return (
        <div>
            <Navbar />
            <Container component="main">
                <CssBaseline />
                <h1>Home</h1>
            </Container>
        </div>
    )
}

export default Home;