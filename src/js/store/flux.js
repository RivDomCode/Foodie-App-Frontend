const url = "https://3000-scarlet-cat-vmp5tp7q.ws-eu03.gitpod.io/";
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
			/////**************ADD FAVORITE
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
			/////****************DELETE FAVORITE */
			deleteFavorites: id => {
				const state = getStore();
				let favlist = [...state.favorites];
				favlist.splice(id, 1);
				setStore({ favorites: favlist });
			},

			////********* RECIPE HOME */
			getRecipe: page => {
				const token = localStorage.getItem("token");
				const store = getStore();
				const actions = getActions();
				fetch(url + "recipes/page/" + page, {
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
					});
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
						setStore({ myRecipes: data });
					});
			},
			/////****************DELETE Recipe */
			deleteRecipe: recipe => {
				/////
				console.log(recipe, "el id para borrar");
				const token = localStorage.getItem("token");
				const state = getStore();
				const actions = getActions();

				/////

				fetch(url + "delete/recipe/" + recipe.id, {
					method: "PUT",

					headers: { Authorization: " Bearer " + token }
				})
					.then(res => {
						if (res.ok) {
							console.log("todo ok");
						} else {
							console.log("todo mal");
						}
						res.json();
					})
					.catch(error => alert("la receta no se ha borrado"))
					.then(data => {
						actions.getRecipeByUser();
					});
			},
			//*********** GET USER */
			getUser: () => {
				const token = localStorage.getItem("token");
				const store = getStore();
				fetch(url + "user", {
					method: "GET",
					headers: { Authorization: " Bearer " + token }
				})
					.then(res => res.json())
					.then(data => {
						//console.log(data);
						setStore({ user: data });
					});
			},
			//****EDIT USER */
			editProfile: (userName, callback) => {
				const token = localStorage.getItem("token");
				const formData = new FormData();
				formData.append("user_name", userName);
				fetch(url + "user", {
					method: "PUT",
					body: formData,
					headers: { Authorization: " Bearer " + token }
				})
					.then(res => res.json())
					.then(data => {
						callback();
					});
			},
			////*** LOGOUT */
			logoutUser: callback => {
				console.log("ESTOY EN LOG");
				localStorage.clear();
				callback();
			}
		}
	};
};

export default getState;
