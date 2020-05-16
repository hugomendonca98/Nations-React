import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { CardStyled } from "./styles";
import api from "../../services/api";

const Cards = (props) => {
  const [homeInfo, setHomeInfo] = useState([]);

  useEffect(() => {
    async function loadApiHomeInfos() {
      const response = await api.get(
        "/all?fields=alpha3Code;capital;name;flag;population;region;"
      );
      setHomeInfo(response.data);
    }
    loadApiHomeInfos();
  }, []);

  // filtro por região e por pesquisa de nome.
  const search =
    props.search !== "" || props.region !== ""
      ? homeInfo
          .filter((el) => el.region.includes(props.region))
          .filter((el) =>
            el.name.toLowerCase().includes(props.search.toLowerCase())
          )
      : homeInfo;
  return (
    <>
      <CardStyled>
        {search.map((el) => (
          <Link key={el.name} to={`/nation/${el.alpha3Code}`}>
            <div className="card">
              <img src={el.flag} alt="" />
              <h3>{el.name}</h3>
              <div className="text-flex">
                <p>Population:</p>
                <span>{el.population}</span>
              </div>
              <div className="text-flex">
                <p>Region:</p>
                <span>{el.region}</span>
              </div>
              <div className="text-flex">
                <p>Capital:</p>
                <span>{el.capital}</span>
              </div>
            </div>
          </Link>
        ))}
      </CardStyled>
    </>
  );
};

export default Cards;
