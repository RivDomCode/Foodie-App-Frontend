const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			user: {
				usename: "",
				email: "",
				password: ""
			} //para guarda los usuarios registrados
		},
		actions: {}
	};
};

export default getState;
