import axios from "axios";

const instance = axios.create({
	baseURL: "https://react-my-burger-c4b70.firebaseio.com/"
});

export default instance;
