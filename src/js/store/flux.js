
const url = "https://3000-pink-donkey-u2u78cvl.ws-eu03.gitpod.io/";
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			user: [],
			favorites: [],
			recipes: [],
			myRecipes: [],
			pathName: "/",
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
			login: (user, props, setError, setSpinner) => {
				fetch(url + "user/login", {
					method: "POST",
					body: JSON.stringify(user),
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(res => {
						res.json();
						if (res.status == 404) {
							setError({ msg: "User not exist", status: true });
							setSpinner(false);
						}
						if (res.status == 401) {
							setError({ msg: "Invalid username or password", status: true });
							setSpinner(false);
						}
						if (res.status == 500) {
							setError({ msg: "try again later", status: true });
							setSpinner(false);
						}
					})
					.then(data => {
						localStorage.setItem("token", data.access_token);
						props.history.push("/");
						setStore({ pathName: "/" });
					})
					.catch(error => {
						console.log(error);
					});
			},
			//**************SIGNUP */
			registerUser: (user, props, setError, setSpinner) => {
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
					.then(res => {
						if (res.status == 409) {
							setError({ msg: "User Name or email exist", status: true });
							setSpinner(false);
							return;
						}
						if (res.status == 500) {
							setError({ msg: "try again later", status: true });
							setSpinner(false);
							return;
						}
						return res.json();
					})
					.then(data => {
						localStorage.setItem("token", data.access_token);
						props.history.push("/");
						setStore({ pathName: "/" });
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
				console.log("en añadir favoritos");
				const token = localStorage.getItem("token");
				const state = getStore();
				const actions = getActions();
				console.log(recipe);
				if (state.favorites.length > 0) {
					const existRecipe = state.favorites.filter(recipeFavorites => recipeFavorites.id == recipe.id);
					if (existRecipe.length == 0) {
						setStore({ favorites: [...state.favorites, recipe] });
					}
				} else {
					setStore({ favorites: [...state.favorites, recipe] });
				}
				console.log(JSON.stringify(recipe));
				fetch(url + "favorites/" + recipe.id, {
					method: "POST",
					body: JSON.stringify(recipe),
					headers: { Authorization: " Bearer " + token, "Content-Type": "application/json" }
				})
					.then(res => res.json())

					.catch(error => console.error("Error:", error))

					.then(response => actions.getFavorites());
			},
			/////****************DELETE FAVORITE */
			deleteFavorites: id => {
				const token = localStorage.getItem("token");
				const actions = getActions();
				fetch(url + "favorites/" + id, {
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

				fetch(url + "delete/recipe/" + recipe, {
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

			//////////*** GENERATE NEW RECIPE */
			createRecipe: (newRecipe, file) => {
				const formData = new FormData();
				formData.append("title", newRecipe.recipeTitle);
				formData.append("image", file, file.name);
				
				
				formData.append("categories", JSON.stringify(newRecipe.categories));
				

				formData.append("ingredients", JSON.stringify(newRecipe.ingredients));

				formData.append("elaboration", newRecipe.elaboration);
				
				const token = localStorage.getItem("token");
				let headers = { Authorization: " Bearer " + token };
				
				fetch(url + "recipe", {
					method: "POST",

					body: formData,
					headers: headers
				})
					.then(res => res.json())
					.then(data => {
						console.log(data);
						//props.history.push("/");
					})
					.catch(error => console.log(error));
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
