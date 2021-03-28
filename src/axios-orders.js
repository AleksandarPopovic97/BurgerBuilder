import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-224ce.firebaseio.com/',
});

export default instance;