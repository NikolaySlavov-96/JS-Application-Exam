import { removeUserData, setUserData } from '../until.js';
import * as api from './api.js';

const endpoint = {
    'login': '/login',
    'register': '/users',
    'logout': '/users/logout'
}

export async function loginRequest(email, password) {
    const { username, sessionToken, objectId} = await api.postRequest(endpoint.login, { email, password });
    const dataUser = {
        objectId,
        sessionToken,
        username,
        email,
    }
    setUserData(dataUser)
    return dataUser
}

export async function registerRequest(email, username, password) {
    const { sessionToken, objectId } = await api.postRequest(endpoint.register, { email, username, password });
    const dataUser = {
        objectId,
        sessionToken,
        username,
        email,
    }
    setUserData(dataUser)
    return dataUser
}

export async function logoutRequest() {
    const data = await api.getRequest(endpoint.logout);
    removeUserData()
    return data
}
