import styled from "styled-components";

export const StyledPadrao = styled.main`
    min-width: 200px;
    max-width: 1500px;
    min-height: 600px;
    padding: 20px;

    margin: auto;
    
    border-radius: 0 0 20px 20px;
    /* background-color: #f0f0f0; */
    background-image: linear-gradient(135deg, #f0f0f0, #cfdee2);
    box-shadow: 2px 3px 5px black;

    h1{
        font-size: 4em;
    }
    p{
        margin: auto;
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
    //=========missoes e valores====================
    #parentGrid{
        border: 2px solid transparent;
        margin: 0px -20px -20px -20px;
        border-radius: 0 0px 20px 20px;
        /* background-color: #e9faff; */
        
        h1{
            text-align: center;
            color: #216479;
        }
    }
    section{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        justify-items: center;
        max-width: 1200px;
        margin: auto;
        margin-top: -5vh;
        margin-bottom: 5vh;
        padding: 20px;

        fieldset{
            border: 2px solid #339fc0;
            max-width: 350px;
            border-radius: 20px;
            height: 250px;
            /* overflow: hidden; */
            animation: cards 500ms;
        }
        legend{
            margin-left: 2vh;
        }
        legend h2{
            /* border: 2px solid black; */
            color: #339fc0;
            font-size: 3em;
        }
        p{
            margin-top: -5vh;
            font-size: 1.2em;
            box-shadow: none;
            background-color: transparent;
            height: 100px;
            overflow: hidden;
            animation: none;
        }

        @keyframes cards{
            from {opacity: 0; transform: translateY(40px);}
            to {opacity:1 ; transform: translateY(0px);}
        }
    }
    //===============nossas solucoes====================

    #solucoes{
        article{
            display: inline-block;
            max-width: 800px;
            margin-top: 5vh;
            vertical-align: top;
            padding: 20px;

            h1{
                margin-bottom: 2vh;
                font-size: 3em;
            }
            p{
                margin-top: -2vh;
                background-color: transparent;
                font-size: 1.3em;
                box-shadow: none;
            }
        }
        img{
            display: inline-block;
            width: 500px;
        }
    }

    @media screen and (max-width: 1200px){
        section{
            grid-template-columns: 1fr 1fr;
        }
        #solucoes{
            article{
                display: block;
                margin: auto;
            }
            img{
                display: block;
                margin: auto;
                width: 300px;
            }
        }
    }
    @media screen and (max-width: 800px) {
        section{
            grid-template-columns: 1fr;
        }
    }
`