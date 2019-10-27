import axios from 'axios';
import config from './config';

export const orderService = {
    post,
    getAllMaterials
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

function getAllMaterials(apiEndpoint) {
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
            'Content-Type' : 'multipart/form-data'
        }
    }
    
    return options;
}