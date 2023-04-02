import * as api from './api.js';

const endPoints = {
    'search': (query) => `/data/fruits?where=name%20LIKE%20%22${query}%22`
}

export async function searchEngine(query) {
    const resultRequest = await api.getRequest(endPoints.search(query));
    return resultRequest;
}