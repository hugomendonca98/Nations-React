import styled from 'styled-components';
import { SecundaryBackground, PrimaryTextColor } from '../../global/Colors';

export const HeaderStyled = styled.header`
    div.header {
        display: flex;
        justify-content: space-between;
        padding: 20px 40px;
        background-color: ${SecundaryBackground};
        -webkit-box-shadow: 0px 2px 9px -4px rgba(212,212,212,1);
        -moz-box-shadow: 0px 2px 9px -4px rgba(212,212,212,1);
        box-shadow: 0px 2px 9px -4px rgba(212,212,212,1);

        h1{
            font-size: 24px;
            color: ${PrimaryTextColor};
            font-family: Roboto, sans-serif;
            font-style: bold;
        }

        button {
            background-color: transparent;
            border: none;
            color: ${PrimaryTextColor};
            font-family: Roboto, sans-serif;
            font-size: 14px;
            cursor: pointer;
            outline: none;
        }
    }

    @media (max-width: 375px) {
        div.header {
            flex-wrap: wrap;
            justify-content: center;
            button {
                margin-top: 20px;
            }
        }
    }
`;