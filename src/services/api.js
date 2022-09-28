import axios from 'axios';

export default axios.create({
    baseURL: 'https://contacts-api-cubos.herokuapp.com/login',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json'

    }
});