import * as api from './api.js';


const endpoint = {
    'getMate': '/data/fruits?sortBy=_createdOn%20desc',
    'addShoe': '/data/fruits',
    'itemCRUD': '/data/fruits/',
}

export async function getAllShoes() {
    const data = await api.getRequest(endpoint.getMate);
    return data
}

export async function addNewShoe(data) {
    const dataShoe = await api.postRequest(endpoint.addShoe, data);
    return dataShoe;
}

export async function getSpecificShoe(id) {
    const getShoe = await api.getRequest(endpoint.itemCRUD + id);
    return getShoe
}

export async function editSpecificShoe(id, data) {
    const resultEdit = await api.putRequest(endpoint.itemCRUD + id, data);
    return resultEdit;
}

export async function dellShoe(id) {
    const resultDelete = await api.dellRequest(endpoint.itemCRUD + id);
    return resultDelete;
}