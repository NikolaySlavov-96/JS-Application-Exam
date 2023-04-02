import * as api from './api.js';


const endpoint = {
    'getMate': '/data/fruits?sortBy=_createdOn%20desc',
    'addShoe': '/data/fruits',
    'itemCRUD': '/data/fruits/',
}

export async function getAllFruits() {
    const data = await api.getRequest(endpoint.getMate);
    return data
}

export async function addNewFruit(data) {
    const dataShoe = await api.postRequest(endpoint.addShoe, data);
    return dataShoe;
}

export async function getSpecificFruit(id) {
    const getShoe = await api.getRequest(endpoint.itemCRUD + id);
    return getShoe
}

export async function editSpecificFruit(id, data) {
    const resultEdit = await api.putRequest(endpoint.itemCRUD + id, data);
    return resultEdit;
}

export async function removeFruit(id) {
    const resultDelete = await api.dellRequest(endpoint.itemCRUD + id);
    return resultDelete;
}