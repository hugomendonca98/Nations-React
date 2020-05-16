import styled from 'styled-components';

import { PrimaryTextColor, SecundaryTextColor, SecundaryBackground} from '../../global/Colors';

export const NationStyled = styled.div`

    .button-container {
        width: 1050px;
        margin: auto;
        margin-top: 40px;

        button {
        border: none;
        background-color: ${SecundaryBackground};
        -webkit-box-shadow: 0px 2px 9px -4px rgba(212,212,212,1);
        -moz-box-shadow: 0px 2px 9px -4px rgba(212,212,212,1);
        box-shadow: 0px 2px 9px -4px rgba(212,212,212,1);
        padding: 10px 30px;
        cursor: pointer;

            svg {
                margin-right: 10px;
            }
        }
    }


    .nation-container {
        display: flex;
        width: 1050px;
        margin: auto;
        margin-top: 30px;
        justify-content: space-between;
        align-items: center;

        img {
            width: 500px;
        }

        #nation-name {
            font-size: 25px;
        }

    }

    div.borders {
        margin-top: 20px;
        width: 500px;
        display: flex;
        flex-wrap: wrap;
        a {
            text-decoration: none;
            color: ${PrimaryTextColor};
            margin-left: 5px;
            padding: 5px 30px;
            -webkit-box-shadow: 0px 2px 9px -4px rgba(212,212,212,1);
            -moz-box-shadow: 0px 2px 9px -4px rgba(212,212,212,1);
            box-shadow: 0px 2px 9px -4px rgba(212,212,212,1);
        }
    }

    .text-flex-nation {
        display: flex;
        justify-content: space-between;
        width: 500px;
        margin-top: 20px;

        .nation-text-info {
            div {
                display: flex;
                margin-top: 10px;

                p {
                    font-family: Roboto, sans-serif;
                    color: #000;
                }

                span {
                    color: ${SecundaryTextColor};
                    margin-left: 5px;
                }
            }
        }
    }

    @media (max-width: 1083px){
        
        .button-container {
            width: 500px;
        }

        .nation-container {
            flex-wrap: wrap;
            width: 500px;

            .nation-info {
                margin-top: 20px;
            }

        }

        div.borders {
            margin-bottom: 20px;
        }
    }

    @media (max-width: 545px) {
        .button-container {
            width: 400px;
        }

        .nation-container {
            width: 400px;

            img {
                width: 400px;
            }

            .text-flex-nation {
                width: 400px;
            }

            div.borders {
                width: 400px;
            }
        }
    }

    @media (max-width: 440px) {
        .button-container {
            width: 300px;
        }

        .nation-container {
            width: 300px;

            img {
                width: 300px;
            }

            .text-flex-nation {
                width: 300px;
                flex-wrap: wrap;
                
            }

            div.borders {
                width: 300px;
            }
        }
    }

    @media (max-width: 333px) {
        .button-container {
            width: 200px;
        }

        .nation-container {
            width: 200px;

            img {
                width: 200px;
            }

            .text-flex-nation {
                width: 200px;
                flex-wrap: wrap;
                font-size: 14px;
            }

            div.borders {
                width: 200px;
            }
        }
    }
`;