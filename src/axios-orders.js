import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-builder-21617.firebaseio.com/'
});

export default instance;