const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			user: {
				username: "4Geeks Academy",
				email: "appFoodie@SpeechGrammarList.com",
				password: "12345678"
			},

			favorites: []
		},
		actions: {
			createUser: user => {},

			addToFavorites: str => {
				const state = getStore();
				if (!state.favorites.includes(str)) {
					setStore({ favorites: [...state.favorites, str] });
				}
			},

			deleteFavorites: id => {
				const state = getStore();
				let favlist = [...state.favorites];
				favlist.splice(id, 1);
				setStore({ favorites: favlist });
			}
		}
	};
};

export default getState;
