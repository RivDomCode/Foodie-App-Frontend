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
			createUser: user => {
				console.log(user);
				const new_user = {
					user_name: user.username,
					email: user.email,
					password: user.password
				};
				fetch("https://3000-eebc3df8-f426-41f7-8f32-d9211915975b.ws-eu03.gitpod.io/" + "user/register", {
					method: "POST",
					body: JSON.stringify(new_user),
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(res => res.json())
					.then(data => console.log(data))
					.catch(error => console.log(error));
			},

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
