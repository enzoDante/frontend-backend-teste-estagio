import { createGlobalStyle } from 'styled-components'

export const CSSGeral = createGlobalStyle`
    
    body{
        margin: 0;
        padding: 0;
        background-color: #f9f9f9;
        font-family: Arial, Helvetica, sans-serif;
    }
    body::-webkit-scrollbar{
        width: 4px;
        background-color: #b4b4b4;
        border-radius: 20px;
    }
    body::-webkit-scrollbar-thumb{
        background-color: #797979;
        border-radius: 20px;
    }

`
