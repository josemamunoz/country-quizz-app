const getState = ({ getStore, getActions, setStore }) => {


	return {
		store: {
			all: [],
			loading: "",
			randomCountries: [],
			currentQuestion: 1,
			countriesPerPage: 4,
			indexOfFirstCountry: 0,
			indexOfLastCountry: 3,
			currentCountries: [],
			randomAnswers: [],
			temporalScore: 9,
			totalScore: 0,
			options: [undefined, undefined, undefined, undefined]
		},
		actions: {
			// Obtiene los paises de la Api y genera los estados de waiting, loading, 
			//loaded para esperar mientras se cargan los datos:

			getCountries: async url => {
				const store = getStore();

				setStore({
					loading: "waiting"
				});
				
				const response = await fetch(url);
				setStore({
					loading: "loading"
				});

				const data = await response.json();
				
				setStore({
					all: data,
				});
				setStore({
					loading: "loaded"
				});
				console.log(store.loading)
				
			},

			// Obtenemos los paises de forma aleatoria cuando presionamos el botón start:

			getRandomCountries: (countries, totalCountries) => {
				const store = getStore();
				const actions = getActions();

				for(const country in countries){
					const randomCountry = countries[Math.floor(Math.random() * totalCountries+1)];
					store.randomCountries.push(randomCountry);
				};

				actions.getRandomAnswers(store.randomCountries);
				
			},

			//Obtener sólo 5 paises aleatorios por pregunta

			getRandomAnswers: (arrayOfCountries) => {
				const store = getStore();

				const countries = store.randomCountries;
				const indexOfLastCountry = store.currentQuestion * store.countriesPerPage;
				const indexOfFirstCountry = indexOfLastCountry - store.countriesPerPage; 
				const currentCountries = countries.slice(indexOfFirstCountry, indexOfLastCountry);

				for(const index in arrayOfCountries){
					const randomAnswer = currentCountries[Math.floor(Math.random() * store.countriesPerPage)];

					if(store.randomAnswers.indexOf(randomAnswer) === -1){
					  store.randomAnswers.push(randomAnswer)
					}
			  
				}
			},

			//Compara si la respuesta seleccionada es correcta o no y suma o resta puntaje
			
			handleScore: (selectedOption) =>{
				const store = getStore();
				const correctAnswer = store.randomCountries[store.indexOfFirstCountry].name;
				const optionIndex = store.randomAnswers.indexOf(selectedOption);

				if(selectedOption.name === correctAnswer){
					store.totalScore += store.temporalScore;
					store.options[optionIndex] = true;
				}else{
					store.temporalScore += -3;
					store.totalScore = store.temporalScore;
					store.options[optionIndex] = false;
				}
			},
			handleNextQuestion: ()=>{
				const store = getStore();
				store.currentQuestion +=1;
				store.temporalScore = 9;
				store.options = [undefined, undefined, undefined, undefined]
			}
			
	},
};
}

export default getState;
