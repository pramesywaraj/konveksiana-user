import axios from 'axios';
import config from './config';

export const orderService = {
    // Landing Order
    post,
    getAllCategories,
    getAllMaterials,
    getAllProvinces,

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
            return err.response;
        })

}

function getAllCategories(apiEndpoint) {
    return axios.get(config.baseUrl + apiEndpoint, getOptionsAuth())
        .then((response) => {
            return response;
        })
        .catch((err) => {
            return err;
        });
}

function getAllMaterials(apiEndpoint) {
    return axios.get(config.baseUrl + apiEndpoint, getOptionsAuth())
        .then((response) => {
            return response;
        })
        .catch((err) => {
            return err;
        });
}

function getAllProvinces(apiEndpoint) {
    return axios.get(config.rajaUrl + apiEndpoint, getOptionsKey())
        .then((response) => {
            return response;
        })
        .catch((err) => {
            return err;
        });
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

function getOptionsKey() {

    let options = {};

    options.headers = { 
        'Access-Control-Allow-Origin': '*',
        'key': 'fb3eff68fde63af6463c46650d68c4f1',
        withCredentials: true,
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