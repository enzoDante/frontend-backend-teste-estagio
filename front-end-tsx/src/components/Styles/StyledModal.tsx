import styled from "styled-components";

export const StyledModal = styled.div`

    /* display: none; */
    background-color: #2c2b2bd3;
    position: fixed;
    margin-top: -12vh;
    width: 100%;
    height: 100%;
    padding: 10px;
    animation: escurece 600ms;
    

    #contentModal{
        max-width: 300px;
        min-height: 270px;
        padding: 20px;
        margin: auto;
        margin-top: 10vh;
        background-color: white;
        border-radius: 10px;
        animation: modaleffect 600ms;
    }
    h3{
        font-size: 1.5em;
        text-align: center;
        margin-top: -0.5vh;
    }
    #contentModal p{
        border-bottom: 2px solid black;
        margin-bottom: 5vh;
        font-size: 1.2em;
        font-weight: bold;
    }

    .modalo{
        display: block;
    }

    @keyframes escurece{
        from {opacity: 0;}
        to {opacity: 1;}
    }
    @keyframes modaleffect{
        from {transform: scale(0.8);}
        to {transform: scale(1);}
    }

`