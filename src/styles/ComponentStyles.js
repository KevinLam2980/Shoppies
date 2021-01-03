import styled from 'styled-components'

export const StyledDashboard = styled.div`
display: flex;
flex-direction: column;
background-color: #1f1f1f;
width: 100%;
height: 100vh;
overflow: hidden;
div#main {
    height: 100%;
}
div#mainSection {
    display: flex;
    height: 100%;
    width: 100%;
}
@media (max-width: 800px) {
    height: 100%;
    overflow: scroll;
    div#mainSection {
        flex-direction: column
    }
}
`

export const StyledMovie = styled.div`
display: flex;
height: 150px;
width: 100%;
justify-content: space-evenly;
align-items: center;
color: white;
text-align: center;
background-color: rgba(20,20,20);
border-bottom: 1px solid black;
transition: 0.7s;
cursor: pointer;
img {
    width: 120px;
    height: 150px;
    border: 1px solid black;
}
.movieDetails {
    width: calc(100% - 120px);
    display: flex;
    justify-content: space-evenly;
}
.movieName {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 1rem;
}
button.addBTN {
    height: 150px;
    background-color: #E50914;
    border: none;
    outline: none;
    transition: 0.6s ease-out;
    display: hidden;
    overflow: hidden;
    width: 0;
    padding: 0;
}
&:hover {
    box-shadow: 0 0 7px 2px #E50914;
    z-index: 2;
}
&:hover button {
        display: inline-block;
        width: 15%;
        border: none;
        overflow: hidden;
    }
@media (max-width: 800px) {
    height: 100px;
    img {
        height: 100px;
    }
    .movieDetails {
    width: calc(100% - 75px);
}
    button.addBTN {
        height: 100px;
        border: 1px solid black;
        outline: none;
        width: 15%;
}
}
@media (max-width: 430px) {
    height: 100px;
    img {
        height: 100px;
        width: 80px;
    }
    button.addBTN {
        height: 100px;
        border: 1px solid black;
        outline: none;
        width: 20%;
}
}
`

export const StyledNominatedMovie = styled.div`
display: flex;
flex-direction: column;
min-height: 150px;
max-width: 175px;
height: 90%;
justify-content: center;
text-align: center;
color: white;
background-color: rgba(20,20,20); 
font-size: 1rem;
cursor: pointer;
img {
    width: 100%;
    height: 75%;
    align-self: flex-start
}
.nominatedMovieName {
    height: 25%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
}

@media (max-width: 400px) {
    max-width: 100px;
}
@media (max-width: 500px) {
    max-height: 200px;
    max-width: 125px;
}
@media (max-width: 1200px) {
font-size: 0.85rem;
}
@media (max-width: 1050px) {
    font-size: 0.8rem;
}
`

export const StyledMovieInfo = styled.div`
height: 65%;
padding: 1rem 2rem 0;
color: white;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
overflow-y: hidden;

button.submitBTN:disabled {
    background-color: grey;
    border: grey;
    
}
#movieDataMain {
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    margin-bottom: 1rem;
    height: calc(100% - 125px);
    .movieDescription {
        width: 100%;
        margin-bottom: 1.5rem;
        padding: 1rem;
        box-shadow: 0 7px 7px -6px #E50914;
        background-color: rgba(20,20,20);
        p {
            padding-top: 0.5rem;
            line-height: 1.5;
        }
    }
    .movieDetails {
        display: flex;
        width: 100%;
        line-height: 1.2;
        padding: 1rem;
        background-color: rgba(20,20,20);
        box-shadow: 0 7px 7px -6px #E50914;
        @media (max-width: 500px) {
            flex-direction: column;
        }
    }
    .movieDetailsLeft, .movieDetailsRight, .movieDetailsMiddle{
        width: 33.3%;
        @media (max-width: 500px) {
            width: 100%;
            margin: 0 !important;
        }
    }
    .movieDetailsMiddle{
        margin: 0 0.5rem;
    }
    .movieDetailsLeft *, .movieDetailsRight *, .movieDetailsMiddle *  {
        padding: 0.5rem 0.75rem;
        border-bottom: 1px solid #1f1f1f;
    }
    @media (max-width: 1050px) {
        .movieDetails {
             font-size: 0.9rem;
        }
    }
}
button.removeBTN, button.submitBTN {
    transition: 0.7s;
    font-size: 1rem;
    border: 2px solid #E50914;
    border-radius: 10px;
    background-color: black;
    color: white;
    padding: 0.5rem 1rem;
    margin-left: 1rem;
    &:active, &:focus {
        outline: 0;
    }
    &:hover {
        background-color: #E50914;
        border: none;
        color: black;
        box-shadow: 0 0 7px 2px black;
    }
}
.imdbBTN {
    transition: 0.7s;
    font-size: 1rem;
    border: 2px solid #E50914;
    border-radius: 10px;
    background-color: black;
    color: white;
    padding: 0.5rem 1rem;
    text-decoration: none;
    text-align: center;
    &:active, &:focus {
        outline: 0;
    }
    &:hover {
        background-color: #E50914;
        border: none;
        color: black;
        box-shadow: 0 0 7px 2px black;
    }
}
    #movieButtons {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        width: 100%;
        @media (max-width: 500px) {
            flex-direction: column;
            * {
                width: 100%;
                margin: 0 0 5px;
            }
        }
    }
    @media (max-width: 1050px) {
        .imdbBTN, button.removeBTN, button.submitBTN {
              font-size: 0.8rem;
        }
}
`

export const StyledNav = styled.div`
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

export const StyledNominations = styled.div`
width: 100%;
height: 35%;
display: flex;
justify-content: center;
align-items: center;
perspective: 700px;
padding: 1rem;
transition: 1s;

.nominatedMovie {
    transition: 0.5s ease-out;
    transform: rotateY(45deg);
    z-index: -2;
    --webkit-transform: rotateY(45deg);
    box-shadow: -15px 10px 10px black;
    &:hover {
        box-shadow: -15px 10px 10px #E50914;
    }
}
.active{
    transform: rotateY(0) scale(1.1);
    --webkit-transform: rotateY(0) scale(1.1);
    z-index: 2;
    box-shadow: 0 10px 10px #E50914;
    &:hover {
        box-shadow: 0 10px 10px #E50914;
    }
}
.active ~ .nominatedMovie{
    transform: rotateY(-45deg);
    --webkit-transform: rotateY(-45deg);
    z-index: -1;
    box-shadow: 15px 10px 10px black;
    &:hover {
        box-shadow: 15px 10px 10px #E50914;
    }
}

`

export const StyledNominationSection = styled.div`
display: flex;
flex-direction: column;
height: 100%;
width: 60%;
overflow-y: scroll;
background-color: #1f1f1f;

#nominationSectionHeader {
    height: 100px;
    width: 100%;
    border-bottom: 2px solid #E50914;
    display: flex;
    background-color: rgba(20,20,20);
    justify-content: center;
    align-items: center;
    h2 {
        color: white;
        font-size: 2rem;
    }
}

#nominatedMovieView {
    height: calc(100vh - 100px);
}
@media (max-width: 800px) {
    height: 100%;
    width: 100%;
    div#nominationSectionHeader {
        height: 75x;
        background-color: black;

    }
}
`

export const StyledSearchBar = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
input {
    color: white;
    background-color: black;
    border: 2px solid #E50914;
    width: 50%;
    min-width: 200px;
    border-radius: 10px;
    text-align: center;
    padding: 0.5rem 0.5rem;
    font-size: 1.1rem;
    &:active, &:focus {
        outline: none;
    }
}
.svg-icon {
    width: 25px;
    fill: #E50914;
    margin-right: 0.5rem;
}
@media (max-width: 800px) {
        padding: 1.5rem;
    }
`

export const StyledSearchResults = styled.div`
display: flex;
flex-direction: column;
overflow-y: scroll;
height: calc(100vh - 100px);
padding-bottom: 51px;
border-right: 2px solid #E50914;
@media (max-width: 800px) {
    border: none;
    padding-bottom: 1px;
}
`

export const StyledSearchSection = styled.div`
display: flex;
background-color: #1f1f1f;
width: 40%;
flex-direction: column;
height: 100%;

div#searchHeader {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(20,20,20);
    width: 100%;
    height: 100px;
    border-bottom: 2px solid #E50914;
}
@media (max-width: 800px) {
    height: calc(60vh - 75px);
    width: 100%;
    div#searchHeader {
        height: 75x;
        background-color: black;
    }
}
`