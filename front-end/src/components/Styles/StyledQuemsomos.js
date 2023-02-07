import styled from "styled-components";

export const StyledQuemsomos = styled.main`
    min-width: 200px;
    max-width: 1500px;
    min-height: 600px;
    padding: 20px;

    margin: auto;
    /* border: 2px solid red; */
    border-radius: 0 0 20px 20px;
    box-shadow: 2px 3px 5px black;

    section{
        margin: 0px -20px 0px -20px;
        padding-top: 10vh;
        padding-bottom: 10vh;
        line-height: 1.5em;
        padding-left: 30px;
    }
    section.normal{
        background-color: white;
        color: black;
    }
    section.parallax{
        background-color: rgb(37, 37, 37);
        color: white;
        box-shadow: inset 6px 6px 13px 0 rgba(0, 0, 0, 0.479);
        background-size: cover;
        background-attachment: fixed;
    }
    section#img1{
        background-image: url('/images/parque.jpg');
    }
    section#img2{
        background-image: url('/images/parque2.webp');
    }
    section div{
        background-color: #303030da;
        border-radius: 10px;
        max-width: 500px;
    }

    h1{
        /* margin: 0px -20px 0px -20px; */
        padding: 10px;
        margin: 5px;
        margin-bottom: -2.5vh;
        /* border: 1px solid red; */
        /* background-color: #ddd; */
    }
    /* section.parallax p{
        background-color: #303030da;
    } */
    p{
        text-indent: 1em;
        font-size: 1.2em;
        max-width: 500px;
        padding: 10px;
        border-radius: 5px;
        text-align: justify;
        
    }
`