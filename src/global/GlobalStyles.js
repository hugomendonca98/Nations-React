import { createGlobalStyle } from 'styled-components';
import { PrimaryBackground } from './Colors';

export default createGlobalStyle`

@import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

    * {
        margin: 0;
        padding: 0;
    }

    body {
        font-family: Roboto, sans-serif;
        background-color: ${PrimaryBackground};
    }
`;