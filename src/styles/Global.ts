import { createGlobalStyle } from "styled-components";
import { Reset } from "./Mixins";

export const GlobalStyle = createGlobalStyle`
    body {
        padding: 0px;
        margin: 0px;
        ${Reset}
    }

    h1 {
        font-family: ${props => props.theme.fonts[0]};
        font-weight: 600;
        text-transform: uppercase;
        font-size: ${({theme}) => theme.fontsizes["xl"]}
    }

    img {
        width: 100%;
    }
`