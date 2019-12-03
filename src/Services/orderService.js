import axios from 'axios';
import config from './config';

export const orderService = {
    // Landing Order
    post,
    getAllCategories,
    getAllProducts,
    getAllMaterials,
    getAllProvinces,
    getAllCities,
    getAllDistricts,
    getShipmentFees,

    // User Order
    getAllOrders,
    getOrderById
}

function post(apiEndpoint, payload) {

    return axios.post(config.baseUrl + apiEndpoint, payload, getOptions('FORM'))
        .then(res => {
            console.log("Cek Response : ", res);
            return res;
        }, err => {
            alert("Harap login terlebih dahulu Untuk memesan")
            return err.response;
        })

}

function getAllCategories(apiEndpoint) {
    return axios.get(config.baseUrl + apiEndpoint)
        .then((response) => {
            return response;
        })
        .catch((err) => {
            return err;
        });
}

function getAllProducts(apiEndpoint) {
    return axios.get(config.baseUrl + apiEndpoint)
        .then((response) => {
            return response;
        })
        .catch((err) => {
            return err;
        });
}

function getAllMaterials(apiEndpoint) {
    return axios.get(config.baseUrl + apiEndpoint)
        .then((response) => {
            return response;
        })
        .catch((err) => {
            return err;
        });
}

function getAllProvinces(apiEndpoint) {
    return axios.get(config.baseUrl + apiEndpoint)
        .then((response) => {
            return response;
        })
        .catch((err) => {
            return err;
        });
}

function getAllCities(apiEndpoint) {
    return axios.get(config.baseUrl + apiEndpoint)
        .then((response) => {
            return response;
        })
        .catch((err) => {
            return err;
        });
}

function getAllDistricts(apiEndpoint) {
    return axios.get(config.baseUrl + apiEndpoint)
        .then((response) => {
            return response;
        })
        .catch((err) => {
            return err;
        });
}

function getShipmentFees(apiEndpoint, payload) {

    return axios.post(config.baseUrl + apiEndpoint, payload)
        .then(res => {
            return res;
        }, err => {
            alert("Harap melengkapi Data yang lain terlebih dahulu")
            return err.response;
        })

}

function getAllOrders(apiEndpoint) {
    return axios.get(config.baseUrl + apiEndpoint, getOptionsAuth())
        .then((response) => {
            return response;
        })
        .catch((err) => {
            return err;
        });
}

function getOrderById(apiEndpoint) {
    return axios.get(config.baseUrl + apiEndpoint, getOptionsAuth())
        .then((response) => {
            return response;
        })
        .catch((err) => {
            return err;
        });
}

function getOptionsAuth(type) {

    let options = {};

    if(localStorage.getItem('token')){
        options.headers = { 
            'Authorization': 'Bearer ' + localStorage.getItem('token'),
        }
    }
    
    return options;
}

function getOptions(type) {

    let options = {};

    if(localStorage.getItem('token')){
        options.headers = { 
            'Authorization': 'Bearer ' + localStorage.getItem('token'),
            'Content-Type' : 'multipart/form-data; boundary=----WebKitFormBoundaryHl8DZV3dBSj0qBVe'
        }
        delete options.headers['Content-Type'];
    }
    
    return options;
}