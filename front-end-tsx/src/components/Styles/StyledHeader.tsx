import styled from 'styled-components'

export const StyledHeader = styled.header`
    min-width: 200px;
    min-height: 50px;
    padding: 10px;

    background-color: #DBF2F9;
    color: #2C2738;

    display: flex;
    flex-direction: row;
    /* align-items: center; */
    align-items: flex-end;
    justify-content: space-between;

    #rotas{
        width: 350px;
        /* border: 2px solid red; */
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    #rotas a:hover{
        background-color: #4678E8;
        color: white;
        border: 2px solid #2C2738;
    }
    #dropdown{
        display: inline-block;
        position: relative;
        transition: linear 200ms;
    }
    #dropdown button, a{
        background-color: transparent;
        font-size: 1em;
        padding: 10px;
        
        /* box-sizing: border-box; */
        border: 2px solid transparent; //#2C2738
        border-radius: 5px;
        text-decoration: none;
        color: black;
        font-weight: bold;
        transition: linear 200ms;
    }
    #dropdown-rotas{
        display: none;
        position: absolute;
        background-color: #DBF2F9; //#f1f1f1

        border: 2px solid black;
        border-radius: 5px;
        min-width: 160px;
        /* padding: 5px; */
        box-shadow: 0px 3px 5px 0px black;
        z-index: 1;
        animation: aparece 600ms;
    }
    #dropdown-rotas a{
        display: block;
        padding: 10px;
        border: none;
        transition: linear 200ms;
    }
    #dropdown:hover #dropdown-rotas{
        display: block;
    }
    #dropdown:hover button{
        background-color: #4678E8;
        border: 2px solid #2C2738;
        color: white;
    }
    #dropdown-rotas a:hover{
        background-color: #B3B5F5;
        text-decoration: underline;
        border: none;
    }

    @keyframes aparece{
        from { opacity: 0; transform: translateY(-20px); }
        to { opacity: 1; transform: translateY(0px); }
    }

`