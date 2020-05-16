import styled from 'styled-components';

import { SecundaryBackground, PrimaryTextColor, SecundaryTextColor } from '../../global/Colors';

export const CardStyled = styled.div `

    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    a {
        text-decoration: none;
        font-family: Roboto, sans-serif;
        color: ${PrimaryTextColor};
        width: 250px;
        height: 330px;
        margin-bottom: 30px;
        margin-right: 10px;
        margin-left: 10px;
    }

    .card {
        display: block;
        width: 250px;
        height: 330px;
        padding-bottom: 5px;
        margin-bottom: 30px;
        border-radius: 4px;
        background-color: ${SecundaryBackground};
        -webkit-box-shadow: 0px 2px 9px -4px rgba(212,212,212,1);
        -moz-box-shadow: 0px 2px 9px -4px rgba(212,212,212,1);
        box-shadow: 0px 2px 9px -4px rgba(212,212,212,1);

            img {
                width: 250px;
                height: 150px;
                border-top-left-radius: 4px;
                border-top-right-radius: 4px;
            }

        h3 {
            padding: 10px 20px;
        }

        div.text-flex {
            display: flex;
            padding: 5px 20px;

            span {
                margin-left: 3px;
                color: ${SecundaryTextColor};
            }
        }
    }
`;