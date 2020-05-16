import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

import { NationStyled } from './styles';

const Nation = (props) => {

    const [ parents, setParents ] = useState([]);

    useEffect(() => {
        async function nationName() {
            const { id } = props.match.params;
            const response = await api.get(`/alpha/${id}`);
            setParents([response.data]);
        }
        nationName();
    },[props.match.params])

    function goBack(e){
        e.preventDefault();
        props.history.goBack();
    }

    return(
        <NationStyled>
            <div className="button-container">
                <button type="button" onClick={goBack}>{<FontAwesomeIcon icon={faArrowLeft} />} Back</button>
            </div>
        {parents.map(el => (
            <div key={el.name} className="nation-container">
                <img src={el.flag} alt=""/>
                <div className="nation-info">
                    <strong id="nation-name">{el.name}</strong>
                    <div className="text-flex-nation">
                        <div className="nation-text-info">
                            <div>
                                <p>Native name: </p><span>{el.nativeName}</span>
                            </div>
                            <div>
                                <p>Population: </p><span>{el.population}</span>
                            </div>
                            <div>
                                <p>Region: </p><span>{el.region}</span>
                            </div>
                            <div>
                                <p>Sub Region: </p><span>{el.subregion}</span>
                            </div>
                            <div>
                                <p>Capital: </p><span>{el.capital}</span>
                            </div>
                        </div>
                        <div className="nation-text-info">
                            <div>
                                <p>Top Level Domain: </p><span>{el.topLevelDomain}</span>
                            </div>
                            <div>
                                <p>Currencies: </p><span>{el.currencies.map( currencie => (
                                    currencie.name
                                ))}</span>
                            </div>
                            <div>
                                <p>Languages: </p>{el.languages.map(language => (
                                    <span key={language.name}>{`${language.name} `}</span>
                                ))}
                            </div>                       
                        </div>
                    </div>
                    <div className="borders">
                        <p>Boarders: </p>{el.borders.map(border => (
                            <Link key={border} to={`/nation/${border}`}>{border}</Link>
                        ))}
                    </div>
                </div>
            </div>
        ))}

        </NationStyled>
    );
}

export default Nation;