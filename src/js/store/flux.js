const url = "https://3000-f8123161-8b0b-4735-b78b-80b422797da5.ws-eu03.gitpod.io/";
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			user: [],
			favorites: []
		},
		actions: {
			//**************LOGIN */
			login: (user, props) => {
				fetch(url + "user/login", {
					method: "POST",
					body: JSON.stringify(user),
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(res => res.json())
					.then(data => {
						console.log(data);
						localStorage.setItem("token", data.access_token);
						props.history.push("/");
					})
					.catch(error => console.log(error));
			},
			//**************SIGNUP */
			registerUser: (user, props) => {
				console.log(user);
				const new_user = {
					user_name: user.username,
					email: user.email,
					password: user.password
				};
				fetch(url + "user/register", {
					method: "POST",
					body: JSON.stringify(new_user),
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(res => res.json())
					.then(data => {
						console.log(data);
						localStorage.setItem("token", data.access_token);
						props.history.push("/");
					})
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
