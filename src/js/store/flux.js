const url = "https://3000-turquoise-mollusk-5jkhmq63.ws-eu03.gitpod.io/";
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			user: [],
			favorites: [],
			recipes: [],
			myRecipes: [],
			pathName: "/login",
			page: 1
		},
		actions: {
			setPathName: path => {
				setStore({ pathName: path });
			},
			nextPage: () => {
				let page = getStore().page;
				setStore({ page: page + 1 });
			},
			//**************LOGIN */
			login: (user, props) => {
				console.log(props, "en el fetch");
				fetch(url + "user/login", {
					method: "POST",
					body: JSON.stringify(user),
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(res => res.json())
					.then(data => {
						localStorage.setItem("token", data.access_token);
						props.history.push("/");
						setStore({ pathName: "/" });
						//window.location.replace("/");
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
						localStorage.setItem("token", data.access_token);
						props.history.push("/");
					})
					.catch(error => console.log(error));
			},
			/////*********** GET FAVORITES
			getFavorites: () => {
				const token = localStorage.getItem("token");
				const store = getStore();
				fetch(url + "favorites", {
					method: "GET",
					headers: { Authorization: " Bearer " + token }
				})
					.then(res => res.json())

					.then(data => setStore({ favorites: data }))

					.catch(err => console.log("Err", err));
			},

			/////**************ADD FAVORITE
			addToFavorites: recipe => {
				const token = localStorage.getItem("token");
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
				fetch(url + "favorites", {
					method: "POST",
					body: JSON.stringify(recipe),
					headers: { Authorization: " Bearer " + token }
				})
					.then(res => res.json())

					.catch(error => console.error("Error:", error))

					.then(response => console.log("Success:", response));
			},
			/////****************DELETE FAVORITE */
			deleteFavorites: favorite => {
				console.log(favorite, "id para borrado");
				const token = localStorage.getItem("token");
				const store = getStore();
				const actions = getActions();

				console.log(favorite);
				fetch(url + favorite.id, {
					method: "PUT",
					headers: {
						Authorization: " Bearer " + token
					}
				})
					.then(res => {
						if (res.ok) {
							console.log("ok");
						} else {
							console.log("mal");
						}
						res.json();
					})
					.catch(err => alert("No ha sido posible borrar el favorito"))
					.then(data => {
						actions.getFavorites();
					});
			},

			////********* RECIPE HOME */
			getRecipe: page => {
				const token = localStorage.getItem("token");
				const store = getStore();
				const actions = getActions();
				fetch(url + "recipe/page/" + page, {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						Autorization: "Bearer " + token
					}
				})
					.then(res => res.json())
					.then(data => {
						console.log("estoy en home", data);
						setStore({ recipes: [...store.recipes, ...data] });
						actions.nextPage();
					})
					.catch(error => console.log(error));
			},
			///////*** RECIPE BY USER */
			getRecipeByUser: () => {
				const token = localStorage.getItem("token");
				console.log(token, "EL TOKEN");
				const store = getStore();
				fetch(url + "user/recipes", {
					method: "GET",
					headers: { Authorization: " Bearer " + token }
				})
					.then(res => res.json())
					.then(data => {
						setStore({ myRecipes: [...store.myRecipes, ...data] });
					});
			}
		}
	};
};

export default getState;
