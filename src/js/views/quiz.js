import '../../styles/quiz.css';
import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";

import {ReactComponent as Adventure} from "../../svg/undraw_adventure_4hum 1.svg"




export const Quiz = () => {

  const {store, actions} = useContext(Context);

  const[checkAnswer, setCheckAnswer] = useState([]);

  /* buttonClicked se utiliza para bloquear el boton despues de un clic, 
  de lo contrario, la función del boton no se detendrá y segurirá sumando 
  o restando puntos con cada nuevo clic*/

  const[buttonAClicked, setButtonAClicked] = useState(false);
  const[buttonBClicked, setButtonBClicked] = useState(false);
  const[buttonCClicked, setButtonCClicked] = useState(false);
  const[buttonDClicked, setButtonDClicked] = useState(false);
  
  const[displayButton, setDisplayButton] = useState("button-display-none")

  /* selection nos devuelve la opcion seleccionada desde el array de 
  randomAnswers (4 paises en total por pregunta) */

  const selectionA = store.randomAnswers[store.indexOfFirstCountry];
  const selectionB = store.randomAnswers[store.indexOfFirstCountry +1];
  const selectionC =  store.randomAnswers[store.indexOfFirstCountry +2];
  const selectionD = store.randomAnswers[store.indexOfFirstCountry +3];

  /* option nos devuelve si la respuesta seleccionada es correcta o no (true o false),
  de un array options con valores iniciales undefined y que a medida que hacemos clic
  en las opciones, van tomando los valores de false si la respuesta es incorrecta 
  y true en el caso contrario */

  const optionA = store.options[store.indexOfFirstCountry];
  const optionB = store.options[store.indexOfFirstCountry +1];
  const optionC =  store.options[store.indexOfFirstCountry +2];
  const optionD = store.options[store.indexOfFirstCountry +3];
  

  function handleNextButton(selectedOption) {
    const correctAnswer = store.randomCountries[store.indexOfFirstCountry].name;
    
    if(correctAnswer === selectedOption.name){
      setButtonAClicked(true);
      setButtonBClicked(true)
      setButtonCClicked(true)
      setButtonDClicked(true)
      setDisplayButton("button-container-display")
    }
    
  }


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
              {store.randomCountries[store.indexOfFirstCountry].capital} is the capital of
              </div>
              <div className="alternatives">
                <button className={"respuesta-A-"+optionA} onClick={ buttonAClicked? ()=> setCheckAnswer([]) : (e)=> (actions.handleScore(selectionA), handleNextButton(selectionA), setButtonAClicked(true))}>
                  <div className="opcionA"> A
                    </div>
                    <div className="opcionA-datos"> {store.randomAnswers[store.indexOfFirstCountry].name}</div> 
                </button>
                <button className={"respuesta-B-"+optionB} onClick={buttonBClicked? ()=> setCheckAnswer([]) : (e)=> (actions.handleScore(selectionB), handleNextButton(selectionB), setButtonBClicked(true))}>
                <div className="opcionB">B
                    </div>
                    <div className="opcionA-datos"> {store.randomAnswers[store.indexOfFirstCountry +1].name}</div> 
                </button>
                <button className={"respuesta-C-"+optionC} onClick={buttonCClicked? ()=> setCheckAnswer([]) : (e)=> (actions.handleScore(selectionC),handleNextButton(selectionC), setButtonCClicked(true))}>
                <div className="opcionC">C
                    </div>
                    <div className="opcionA-datos">{store.randomAnswers[store.indexOfFirstCountry +2].name}</div> 
                </button>
                <button className={"respuesta-D-"+optionD} onClick={buttonDClicked? ()=> setCheckAnswer([]) : (e)=> (actions.handleScore(selectionD),handleNextButton(selectionD), setButtonDClicked(true))}>
                <div className="opcionD">D
                    </div>
                    <div className="opcionA-datos"> {store.randomAnswers[store.indexOfFirstCountry +3].name}</div> 
                </button>
                <div className={displayButton}>
                  <button className="next" onClick={(e) => (actions.handleNextQuestion(), handleNextButton())}>Next</button>
                </div>
                
              </div>
              
            </div>
          </div>
          </div>
          </div>
      }
    </>
  );
}

