import styled from "styled-components";

export const StyledContato = styled.main`
    min-width: 200px;
    max-width: 1500px;
    min-height: 600px;
    padding: 20px;

    margin: auto;
    
    border-radius: 0 0 20px 20px;
    box-shadow: 2px 3px 5px black;

    form{
        display: block;
        max-width: 350px;
        min-height: 300px;
        margin: auto;
        margin-top: 5vh;
        /* border: 2px solid red; */
        box-shadow: 0 5px 10px 0 #1a1a1ad8;
        border-radius: 10px;
        padding: 50px;

    }
    form h2{
        text-align: center;
        font-size: 2em;
        margin-top: -2vh;
    }
    form label{
        color: #383838e4;
    }
    form input{
        border: none;
        outline: none;

        display: block;
        background-color: transparent;
        border-bottom: 2px solid #383838e4;
        font-size: 1.1em;
        line-height: 1.5;
        padding: 0 7px 0 7px;
        margin: 0px 0px 30px -5px;
        width: 100%;
        transition: linear 200ms;
    }
    form input:focus{
        border-bottom-color: #51b8b9;
    }
    form input.invalido{
        color: red;
        border-bottom-color: red;
    }
    form p{
        color: red;
        margin-top: -2vh;
        font-size: 0.9em;
    }

    form button{
        font-size: 1.5em;
        display: block;
        margin: auto;
        margin-top: 7vh;
        margin-bottom: 3vh;
        padding: 10px;
        border: none;
        border-radius: 20px;
        width: 100%;
        background-color: #6eb8b9;
        box-shadow: 0 5px 10px 0 #60a0a1c8;
        color: white;
        cursor: pointer;

        transition: linear 200ms;
    }
    form button:hover{
        background-color: #365858;
        box-shadow: 0 5px 30px 0 #467575c7;
    }
`