import { createGlobalStyle } from "styled-components"
import Book from "./fonts/National-Book.otf"
import Bold from "./fonts/National-Bold.otf"
import BookItalic from "./fonts/National-BookItalic.otf"
import BoldItalic from "./fonts/National-BoldItalic.otf"

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: "National Book";
        src: url(${Book});
    }
    @font-face {
        font-family: "National Bold";
        src: url(${Bold});
    }
    @font-face {
        font-family: "National Book Italic";
        src: url(${BookItalic});
    }
    @font-face {
        font-family: "National Bold Italic";
        src: url(${BoldItalic});
    }
    ::selection {
        background: rgb(230, 80, 100);
        color: white;
    }
    * {
        font-family: "National Book"
    }
    html, body {
        margin: 0;
    }
    h1, h2, h3, h4 {
        color: rgb(230, 80, 100)
    }
    .bold {
        font-family: "National Bold";
    }
    .bookItalic {
        font-family: "National Book Italic";
    }
    .boldItalic {
        font-family: "National Bold Italic";
    }
    .upper {
        text-transform: uppercase;
    }
    
`
