const url = "https://3000-harlequin-fish-0010lpy6.ws-eu03.gitpod.io/";
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			user: [],
			favorites: [],
			recipes: [],
			myRecipes: [],
			comments: [],
			selectedRecipe: {},
			pathName: "/",
			categories: [],
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
			////
			userLogged: () => {
				const token = localStorage.getItem("token");
				if (token) {
					return true;
				} else if (!token) {
					return false;
				}
			},
			sendToLogin: props => {
				const token = localStorage.getItem("token");
				if (!token) {
					props.history.push("/login");
				}
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
						return res.json();
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
						setStore({ page: 1, recipes: [] });
						actions.getRecipe(1);
					});
			},
			//*********** GET USER */
			getUser: () => {
				const token = localStorage.getItem("token");
				fetch(url + "user", {
					method: "GET",
					headers: { Authorization: " Bearer " + token }
				})
					.then(res => res.json())
					.then(data => {
						setStore({ user: data });
					});
			},

			//////////*** GENERATE NEW RECIPE */
			createRecipe: (newRecipe, file, props) => {
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
						setStore({ page: 1, recipes: [], pathName: "/" });
						getActions().getRecipe(1);
						props.history.push("/");
					})
					.catch(error => console.log(error));
			},
			//****EDIT USER */
			editProfile: (user, file, props, setError) => {
				const token = localStorage.getItem("token");
				const formData = new FormData();
				formData.append("user_name", user.user_name);
				if (file) {
					formData.append("urlImg", file, file.name);
				}

				fetch(url + "user", {
					method: "PUT",
					body: formData,
					headers: { Authorization: " Bearer " + token }
				})
					.then(res => {
						if (res.status == 403) {
							setError({ msg: "User Name or email exist", status: true });
							console.log("El usuario ya existe");
						} else {
							res.json();
							props.history.push("/profile");
						}
					})

					.catch(error => console.log(error));
			},
			////***SELECT RECIPE */

			selectedRecipe: recipe => {
				const store = getStore();
				setStore({ selectedRecipe: recipe });
			},

			/////*****COMMENTS */

			getComments: recipe => {
				const token = localStorage.getItem("token");
				const store = getStore();

				fetch(url + "comments/" + recipe.id, {
					method: "GET",
					headers: { Authorization: " Bearer " + token }
				})
					.then(res => res.json())

					.then(data => setStore({ comments: data }))

					.catch(err => console.log("Err", err));
			},

			////****CREATE COMMENTS */

			createComments: (comments, selectedRecipe) => {
				console.log(comments, selectedRecipe);
				const token = localStorage.getItem("token");
				const state = getStore();
				const actions = getActions();
				const body = {
					text: comments,
					recipe_id: selectedRecipe.id
				};
				console.log(JSON.stringify(comments));
				fetch(url + "comments", {
					method: "POST",
					body: JSON.stringify(body),
					headers: { Authorization: " Bearer " + token, "Content-Type": "application/json" }
				})
					.then(res => res.json())

					.catch(error => console.error("Error:", error))

					.then(response => actions.getComments(selectedRecipe));
			},
			////*** LOGOUT */
			logoutUser: callback => {
				localStorage.clear();
				callback();
			},
			//////CATEGORIES
			getCategories: async () => {
				const response = await fetch(url + "categories", {
					method: "GET"
				});
				const data = await response.json();
				setStore({ categories: data });
			},
			//////RECIPES by CATEGORIES
			getRecipeCategory: id_category => {
				console.log("id category", id_category);
				const store = getStore();
				const recipe_by_category = [];

				fetch(url + "category/" + id_category, {
					method: "GET"
				})
					.then(res => res.json())
					.then(data => {
						if (data) {
							data.map((recipe, index) => {
								recipe_by_category.push(recipe.category);
								console.log(recipe.category, "receta selec", index);
							});
							console.log(recipe_by_category, "el array");
							setStore({ recipes: [...recipe_by_category] });
							console.log("set del store en recipe", store.recipes);
						}
					});
			}
		}
	};
};

export default getState;
