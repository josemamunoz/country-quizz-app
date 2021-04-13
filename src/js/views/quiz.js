import '../../styles/quiz.css';
import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";

import {ReactComponent as Adventure} from "../../svg/undraw_adventure_4hum 1.svg"




export const Quiz = () => {

  const {store, actions} = useContext(Context);
  const countries = store.randomCountries;
  const randomCountry = countries[Math.floor(Math.random() *5)]
  console.log(countries[Math.floor(Math.random() *5)]);

  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [countriesPerPage, setCountriesPerPage] = useState(4);

  const indexOfLastCountry = currentQuestion * countriesPerPage;
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage; 
  const currentCountries = countries.slice(indexOfFirstCountry, indexOfLastCountry);

  const randomAnswers = [];
  console.log(countriesPerPage);

  function getrandomAnswers(currentCountries) {
    for(const index in currentCountries){
      const randomAnswer = currentCountries[Math.floor(Math.random() * countriesPerPage)];
 /*      console.log(randomAnswer);
      console.log(countriesPerPage); */
      if(randomAnswers.indexOf(randomAnswer) === -1){
        randomAnswers.push(randomAnswer)
      }
      console.log(randomAnswers);

    }
    
  }

  getrandomAnswers(currentCountries);
  console.log(currentCountries);

  return (
    <>
      { store.loading !== "loaded" ?
      <div className="CountryQuiz">
        Loading
      </div> :
        <div className="CountryQuizz" >
          <div className="container">
          <div className="quiz">
            <div className="title">Country Quiz</div>
            <div className="adventuresvg">
              <Adventure/>
            </div>
            <div className="contenido-quiz">
              <div className="question">
              {currentCountries[0].capital} is the capital of
              </div>
              <div className="alternatives">
                <button className="respuesta-A" onClick={()=>{actions.getRandomCountries(store.all, store.all.length)}}>
                  <div className="opcionA"> A
                    </div>
                    <div className="opcionA-datos"> {randomAnswers[0].name}</div> 
                </button>
                <button className="respuesta-B">
                <div className="opcionB">B
                    </div>
                    <div className="opcionA-datos"> {randomAnswers[1].name}</div> 
                </button>
                <button className="respuesta-C">
                <div className="opcionC">C
                    </div>
                    <div className="opcionA-datos">{randomAnswers[2].name}</div> 
                </button>
                <button className="respuesta-D">
                <div className="opcionD">D
                    </div>
                    <div className="opcionA-datos"> {randomAnswers[3].name}</div> 
                </button>
              </div>
              
            </div>
          </div>
          </div>
          </div>
      }
    </>
  );
}

