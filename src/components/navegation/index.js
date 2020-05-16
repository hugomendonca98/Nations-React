import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import { NavegationStyled } from './styles';
import Cards from '../cards/index';

const Navegation = () => {

    const [search, setSearch] = useState('');
    const [ region, setRegion] = useState('');

    function nationSearch(e){
        setSearch(e.target.value);
    }

    function sortRegion(e) {

        switch(e.target.value) {
            case '1':
                setRegion('Africa');
            break;
            case '2':
                setRegion('America');
            break;
            case '3':
                setRegion('Asia');
            break;
            case '4':
                setRegion('Europe');
            break;
            case '5':
                setRegion('Oceania');
            break;
            default:
                setRegion('');
            break;
        }
        
    }

    return (
        <>
            <NavegationStyled>
                <div className="navegation">
                    <div>
                        <FontAwesomeIcon icon={faSearch}/>
                        <input type="text" value={search} onChange={nationSearch} placeholder="Search for a country.."></input>
                    </div>
                    <div className="select-wrapper">
                        <select name="sort-by-region" className="region" onChange={sortRegion}>
                            <option value="0">Filter by region</option>
                            <option value="1">África</option>
                            <option value="2">America</option>
                            <option value="3">Asia</option>
                            <option value="4">Europa</option>
                            <option value="5">Oceania</option>
                        </select>
                    </div>
                </div>
            </NavegationStyled>
            <Cards search={search} region={region}/>
        </>
    );
}

export default Navegation;