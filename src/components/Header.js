import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Container } from 'react-bootstrap'
import { AppBar } from '@material-ui/core'

const Header = () => {
    return (
        <>
            <AppBar position="static" color="primary" className="p-2 link-name" >
                <Container>
                    <LinkContainer to="/">
                        <h1>PokeWiz</h1>
                    </LinkContainer>
                </Container>
            </AppBar>
        </>
    )
}

export default Header
