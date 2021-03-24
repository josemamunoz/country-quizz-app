import background from "./img/background.png";
import './App.css';



function App() {
  return (
    <div className="CountryQuizz" style={{ backgroundImage: `url(${background})`}}>
      <div className="container">
      <div className="quiz">
        Cuadrado del quiz
        <div className="title">Country Quiz</div>
        <div className="contenido">
          
          <div className="question">
            Kuala Lumpur us the capital of
          </div>
          <div className="respuesta-A">
            A vietnam
          </div>
          <div className="respuesta-B">
            B Malasya
          </div>
          <div className="respuesta-C">
            C Sweden
          </div>
          <div className="respuesta-D">
            D Austria
          </div>
        </div>
      </div>
      </div>
      <div className="credits">
        created by <a target="_blank" rel="noreferrer" href="https://devchallenges.io/portfolio/josemamunoz" className="linksexternos">josemamunoz</a> - <a target="_blank" rel="noreferrer" href="https://devchallenges.io/" className="linksexternos">devchallenges.io</a>
      </div>
    </div>
  );
}

export default App;
