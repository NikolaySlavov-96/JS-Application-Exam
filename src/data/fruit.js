import * as api from './api.js';


const endpoint = {
    'getAddFruit': '/classes/Fruit',
    'itemCRUD': '/classes/Fruit/',
}

export async function getAllFruits() {
    const data = await api.getRequest(endpoint.getAddFruit);
    return data
}

export async function addNewFruit(data, userId) {
    const dataUser = Object.assign({}, data);
    dataUser.owner = { __type: 'Pointer', className: '_User', objectId: userId }

    const dataShoe = await api.postRequest(endpoint.getAddFruit, dataUser);
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