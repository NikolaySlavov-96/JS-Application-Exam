import * as api from './api.js';

const endPoints = {
    'search': (query) => `/classes/Fruit?where=${encodeURIComponent(`{"$or":[{"nameFruit":${query}}]}`)}`
}

export async function searchEngine(query) {
    const resultRequest = await api.getRequest(endPoints.search(query));
    return resultRequest;
}