import React from 'react'
import styled from 'styled-components'
import { Container } from '../styles/CommonComponents'

const StyledNav = styled.div`
    background-color: #E50914;
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    #navContainer {
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        h2 {
            font-size: 2rem;
            color: Black;
            font-family: 'Bungee Inline', 'Open Sans', 'Helvetica Neue', sans-serif;
        }
    }
`

const Nav = () => {

    return (
        <StyledNav id="nav">
            <Container id='navContainer'>
                <h2>Shoppies</h2>
            </Container>
        </StyledNav>
    )
}

export default Nav