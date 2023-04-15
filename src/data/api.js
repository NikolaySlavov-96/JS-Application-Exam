import { getUserData } from "../until.js";

// const host = 'http://localhost:3030';
const host = 'http://192.168.88.50:3030';

async function request(method, url, data) {
    const options = {
        method,
        headers: {}
    }

    if(data !== null) {
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(data);
    }

    const hasUser = getUserData()
    if(hasUser) {
        options.headers['X-Authorization'] = hasUser.accessToken;
    }

    try {
        const response = await fetch(host + url, options);

        if(response.status == 204) {
            return response
        }

        const data = await response.json();

        if(response.ok == false) {
            throw new Error(data.message);
        }

        return data;

    } catch(err) {
        alert(err.message);
        throw err;
    }
}

export const getRequest = request.bind(null, 'get');
export const postRequest = request.bind(null, 'post');
export const putRequest = request.bind(null, 'put');
export const dellRequest = request.bind(null, 'delete');