import styled from 'styled-components';

import { SecundaryTextColor, SecundaryBackground } from '../../global/Colors';

export const NavegationStyled = styled.div`

    .navegation {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        padding: 40px 50px;

        div {
            -webkit-box-shadow: 0px 2px 9px -4px rgba(212,212,212,1);
            -moz-box-shadow: 0px 2px 9px -4px rgba(212,212,212,1);
            box-shadow: 0px 2px 9px -4px rgba(212,212,212,1);
            background-color: ${SecundaryBackground};
            padding: 5px 20px;
            border-radius: 3px;

            svg {
                color: ${SecundaryTextColor};
                margin-right: 15px;
            }
        }

        input {
            width: 400px;
            height: 40px;
            padding: 0 10px;
            border: none;
        }

        input:focus {
            border: none;
            outline: none;
        }

        .select-wrapper {
            display: inline-block;
            position: relative;
        }

        .select-wrapper:after {
            content: '';
            width: 0;
            position: absolute;
            right: 20px;
            top: 50%;
            margin-top: -3px;
            border-width: 6px 4px;
            border-style: solid;
            pointer-events: none;
            border-color: darkslategrey transparent transparent transparent;
            -webkit-box-shadow: 0px 2px 9px -4px rgba(212,212,212,1);
            -moz-box-shadow: 0px 2px 9px -4px rgba(212,212,212,1);
            box-shadow: 0px 2px 9px -4px rgba(212,212,212,1);
        }

        select.region {
            height: 40px;
            padding: 0 10px;
            outline: none;
            border: 0;
            width: 200px;
            font-family: Roboto, sans-serif;
            color: ${SecundaryTextColor};
            -moz-appearance: none;
            -webkit-appearance: none;
            appearance: none;
            background-color: transparent;
        }

        select:active {
            outline: none;
            -moz-appearance: none;
            -webkit-appearance: none;
            appearance: none;
            background-color: none;
        }

        select:focus {
            outline: none;
            -moz-appearance: none;
            -webkit-appearance: none;
            appearance: none;
            background-color: none;
        }

        select::-ms-expand{
            display:none;  //FOR IE
        }
    }

    @media (max-width: 845px){
        .navegation {
            justify-content: flex-start !important;

            div {
                margin-bottom: 20px;
            }
        }
    }

    @media (max-width: 609px){
        .navegation {
            input {
                width: 300px;
            }
        }
    }

    @media (max-width: 507px){
        .navegation {
            input {
                width: 200px;
            }
        }
    }

    @media (max-width: 407px){
        .navegation {
            input {
                width: 100px;
            }
        }
    }
`
