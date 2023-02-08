import styled from "styled-components";

export const StyledPadrao = styled.main`
    min-width: 200px;
    max-width: 1500px;
    min-height: 600px;
    padding: 20px;

    margin: auto;
    
    border-radius: 0 0 20px 20px;
    background-color: #f0f0f0;
    box-shadow: 2px 3px 5px black;

    h1{
        font-size: 4em;
    }
    p{
        max-width: 1000px;
        text-align: justify;
        text-indent: 1em;
        font-size: 1.7em;

        padding: 20px;
        border-radius: 10px;
        background-color: white;
        box-shadow: 2px 3px 5px black;
        animation: paragrafo 600ms;
    }
    @keyframes paragrafo{
        from {opacity: 0; transform: translateY(50px);}
        to {opacity:1 ; transform: translateY(0px);}
    }
`