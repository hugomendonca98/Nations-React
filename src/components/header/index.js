import React, { useState } from 'react';
import { HeaderStyled } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faLightbulb } from '@fortawesome/free-solid-svg-icons'

const Header = () => {

    const [ dark, setDark ] = useState('light');

    function darkMode() {
        dark === 'light' ? setDark('dark') : setDark('light');
    }

    return(
        <HeaderStyled mode={dark}>
            <div className="header">
                <h1>Where in the world?</h1>
                <button 
                type="button" 
                onClick={darkMode}>
                    <FontAwesomeIcon icon={dark === 'light' ? faMoon : faLightbulb } /> {`${dark === 'light' ? 'Dark': 'Light'}`} Mode
                </button>
            </div>
        </HeaderStyled>
    );
}

export default Header;