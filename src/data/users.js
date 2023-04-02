import { removeUserData, setUserData } from '../until.js';
import * as api from './api.js';

const endpoint = {
    'login': '/users/login',
    'register': '/users/register',
    'logout': '/users/logout'
}

export async function loginRequest(email, password) {
    const data = await api.postRequest(endpoint.login, { email, password });
    const dataUser = {
        email: data.email,
        id: data._id,
        accessToken: data.accessToken
    }
    setUserData(dataUser)
    return data
}

export async function registerRequest(email, password) {
    const data = await api.postRequest(endpoint.register, { email, password });
    const dataUser = {
        email: data.email,
        id: data._id,
        accessToken: data.accessToken
    }
    console.log(dataUser)
    setUserData(dataUser)
    return data
}

export async function logoutRequest() {
    const data = await api.getRequest(endpoint.logout);
    removeUserData()
    return data
}
