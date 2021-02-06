const url = "https://3000-jade-bobolink-7zloswnb.ws-eu03.gitpod.io/";
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
						setStore({ myRecipes: [...store.myRecipes, ...data] });
					});
			},
			/////****************DELETE Recipe */
			deleteRecipe: id => {
				const state = getStore();
				let recipeDelete = [...state.recipes];
				console.log(recipeDelete, "estoy borrado", id);
				recipeDelete.splice(id, 1);
				setStore({ recipes: recipeDelete });
			}
		}
	};
};

export default getState;
