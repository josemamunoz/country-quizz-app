import '../../styles/home.css';
import {ReactComponent as Adventure} from "../../svg/undraw_adventure_4hum 1.svg"



export const Home = () => {
  return (
    <div className="CountryQuizz" /* style={{ backgroundImage: `url(${background})`}} */>
      <div className="container">
      <div className="quiz">
        <div className="title">Country Quiz</div>
        <div className="adventuresvg">
          <Adventure/>
        </div>
        <div className="contenido">
          
          <div className="question">
            Kuala Lumpur us the capital of
          </div>
          <div className="alternatives">
            <button className="respuesta-A" >
              <div className="opcionA">A
                </div>
                <div className="opcionA-datos"> vietnam</div> 
            </button>
            <button className="respuesta-B">
            <div className="opcionB">B
                </div>
                <div className="opcionA-datos"> Malasya</div> 
            </button>
            <button className="respuesta-C">
            <div className="opcionC">C
                </div>
                <div className="opcionA-datos"> Sweden</div> 
            </button>
            <button className="respuesta-D">
            <div className="opcionD">D
                </div>
                <div className="opcionA-datos"> Australia</div> 
            </button>
          </div>
          
        </div>
      </div>
      </div>
    </div>
  );
}

