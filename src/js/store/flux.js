const getState = ({ getStore, getActions, setStore }) => {


	return {
		store: {
			all: [],
			loading: "",
			randomCountries: [],
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

			getRadomCountries: (countries, totalCountries) => {
				const store = getStore();

				for(const country in countries){
					const randomCountry = countries[Math.floor(Math.random() * totalCountries+1)];
					store.randomCountries.push(randomCountry);
				};
				
			},

			//Obtener sólo 5 paises por pregunta

			/* getQuestions: (min, max) =>{
				Math.floor
			}, */
			
	},
};
}

export default getState;
