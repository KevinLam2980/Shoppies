import React from 'react'
import styled from 'styled-components'
import {Container} from '../styles/CommonComponents'

const StyledNav = styled.div`
    background-color: #E50914;
    width: 100%;
    height: 100px;
`

const Nav = () => {

    return (
        <StyledNav id="nav">
            <Container>
                <h2>Shoppies</h2>
            </Container>
        </StyledNav>
        )
}

export default Nav