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

			addToFavorites: recipe => {
				const state = getStore();
				if (state.favorites.length > 0) {
					const existRecipe = state.favorites.filter(
						recipeFavorites => recipeFavorites.title == recipe.title
					);
					if (existRecipe.length == 0) {
						setStore({ favorites: [...state.favorites, recipe] });
					}
				} else {
					setStore({ favorites: [...state.favorites, recipe] });
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
