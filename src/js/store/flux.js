const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			all: [],
		},
		actions: {
			getAll: async url => {
				const response = await fetch(url);
				const data = await response.json();
				setStore({
					all: data
				})
				
			},
	},
};
}

export default getState;
