import '../../styles/home.css';
import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";

import {ReactComponent as Adventure} from "../../svg/undraw_adventure_4hum 1.svg"
import { Link } from 'react-router-dom';




export const Home = () => {
  const {store, actions} = useContext(Context);

  return (
    <>
      { store.loading !== "loaded" ?
      <div className="CountryQuiz">
        <div className="CountryQuizz" >
          <div className="container">
          <div className="quiz">
            <div className="title">Country Quiz</div>
            <div className="contenido">
              <button className="start-quizz"> Loading</button>
            </div>
          </div>
          </div>
          </div>
      </div> :
        <div className="CountryQuizz" >
          <div className="container">
          <div className="quiz">
            <div className="title">Country Quiz</div>
            <div className="contenido">
              <Link className="start-quizz" to="/quiz" onClick={() =>{actions.getRadomCountries(store.all, store.all.length) }}> Start</Link>
            </div>
          </div>
          </div>
          </div>
      }
    </>
  );
}

