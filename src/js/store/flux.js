const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			user: {
				username: "4Geeks Academy",
				email: "appFoodie@SpeechGrammarList.com",
				password: "12345678"
			}
		},
		actions: {
			createUser: user => {}
		}
	};
};

export default getState;
