import styled from "styled-components";

export const StyledHome = styled.main`
    min-width: 200px;
    max-width: 1500px;
    min-height: 600px;
    padding: 20px;
    margin: auto;
    color: white;
    
    border-radius: 0 0 20px 20px;
    box-shadow: 2px 3px 5px black;

    background-image: url('/images/tecnologia.jpg');
    background-size: cover;
    background-attachment: fixed;

    h1{
        display: block;
        min-width: 100px;
        /* margin: auto; */
        text-align: center;
        font-size: 5em;
        animation: h1 600ms;
    }
    @keyframes h1{
        from {font-size: 6em; transform: translateY(30px);}
        to {font-size: 5em; transform: translateY(0px);}
    }
`