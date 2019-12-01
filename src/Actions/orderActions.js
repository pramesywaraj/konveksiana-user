import { orderService } from '../Services/orderService';
import { history } from '../Helpers/history';
import moment from 'moment';
import config from '../Services/config';

export const orderActions = {
    // Landing Order
    createOrder,
    getAllCategory,
    getAllProduct,
    getAllMaterial,
    getAllProvince,
    getAllCity,
    getAllDistrict,
    getShipmentFee,

    // User Order
    getAllOrder,
    getOrderById,
    getOrderByIdTable
};

// Landing Order

function createOrder(data) {
    return dispatch => {
        let apiEndpoint = 'order';
        let payload = new FormData();

        for (const file of data.orderImage) {
            payload.append('orderImage', file)
        }
        payload.append('userId', data.userId);
        payload.append('materialId', data.materialId);
        payload.append('color', data.color);
        payload.append('description', data.description);
        payload.append('quantity', data.quantity);
        payload.append('city', data.city);
        payload.append('detailAddress', data.detailAddress);
        payload.append('courier', data.courier);
        payload.append('phoneNumber', data.phoneNumber);
        payload.append('shippingPricePrediction', data.shippingPricePrediction);
        payload.append('weightPrediction', data.weightPrediction);
        payload.append('productPricePrediction', data.productPricePrediction);

        orderService.post(apiEndpoint, payload)
            .then(res => {
                if(res.data.status === 200) {
                    alert(res.data.Message);
                    dispatch(createOrderSuccess(res.data));
                    history.push('/');
                } else {
                    dispatch(createOrderFailed());
                    alert(res.data.Message);
                }
            })
    };
}

function getAllCategory() {
    return dispatch => {
        let apiEndpoint = 'category';

        orderService.getAllCategories(apiEndpoint).then(
            (res) => {
                let categories = res.data.category;
                if (res.data.status === 200) {
                    dispatch(getCategoryList(categories));
                }
            }
        ).catch(
            err => {
                console.log(err);
            }
        );
    };
}

function getAllProduct(data) {
    return dispatch => {
        let apiEndpoint = 'product/category/' + data;
        console.log("Cek product : ", apiEndpoint)

        orderService.getAllProducts(apiEndpoint).then(
            (res) => {
                let products = res.data.product;
                if (res.data.status === 200) {
                    dispatch(getProductList(products));
                }
            }
        ).catch(
            err => {
                console.log(err);
            }
        );
    };
}

function getAllMaterial(data) {
    return dispatch => {
        let apiEndpoint = 'material/product/' + data;
        orderService.getAllMaterials(apiEndpoint).then(
            (res) => {
                let materials = res.data.material;
                if (res.data.status === 200) {
                    dispatch(getMaterialList(materials));
                }
            }
        ).catch(
            err => {
                console.log(err);
            }
        );
    };
}

function getAllProvince() {
    return dispatch => {
        let apiEndpoint = 'order/get-province-list';

        orderService.getAllProvinces(apiEndpoint).then(
            (res) => {
                let provinces = res.data.rajaongkir.results;
                if (res.data.rajaongkir.status.code === 200) {
                    dispatch(getProvincesList(provinces));
                }
            }
        ).catch(
            err => {
                console.log(err);
            }
        );
    };
}

function getAllCity(data) {
    return dispatch => {
        let apiEndpoint = 'order/get-city-list?provinceId=' + data;

        orderService.getAllCities(apiEndpoint).then(
            (res) => {
                let cities = res.data.rajaongkir.results;
                if (res.data.rajaongkir.status.code === 200) {
                    dispatch(getCitiesList(cities));
                }
            }
        ).catch(
            err => {
                console.log(err);
            }
        );
    };
}

function getAllDistrict(data) {
    return dispatch => {
        let apiEndpoint = 'order/get-subdistrict-list?cityId=' + data;

        orderService.getAllDistricts(apiEndpoint).then(
            (res) => {
                let districts = res.data.rajaongkir.results;
                if (res.data.rajaongkir.status.code === 200) {
                    dispatch(getDistrictsList(districts));
                }
            }
        ).catch(
            err => {
                console.log(err);
            }
        );
    };
}

function getShipmentFee() {
    return dispatch => {
        let apiEndpoint = 'order/getexpeditioncost';

        let payload = {
            originCityId: "1038",
            destinationCityId: localStorage.district,
            weightPackage: localStorage.weightPrediction,
            expedition: localStorage.courier
        };

        orderService.getShipmentFees(apiEndpoint, payload).then(
            (res) => {
                let shipmentFees = res.data.rajaongkir.results[0].costs;
                if (res.data.rajaongkir.status.code === 200) {
                    dispatch(getShipmentFeesList(shipmentFees));
                }
            }
        ).catch(
            err => {
                console.log(err);
            }
        );
    };
}

export function createOrderSuccess(data) {
    return {
        type: "CREATE_ORDER_SUCCESS",
    }
}

export function createOrderFailed() {
    return {
        type: "CREATE_ORDER_FAILED",
    }
}

export function getCategoryList(categories) {
    return {
        type: 'FETCHED_ALL_CATEGORIES',
        categories: categories,
    };
}

export function getProductList(products) {
    return {
        type: 'FETCHED_ALL_PRODUCTS',
        products: products,
    };
}

export function getMaterialList(materials) {
    return {
        type: 'FETCHED_ALL_MATERIALS',
        materials: materials,
    };
}

export function getProvincesList(provinces) {
    return {
        type: 'FETCHED_ALL_PROVINCES',
        provinces: provinces,
    };
}

export function getCitiesList(cities) {
    return {
        type: 'FETCHED_ALL_CITIES',
        cities: cities,
    };
}

export function getDistrictsList(districts) {
    return {
        type: 'FETCHED_ALL_DISTRICTS',
        districts: districts,
    };
}

export function getShipmentFeesList(shipmentFees) {
    return {
        type: 'FETCHED_ALL_SHIPMENT_FEES',
        shipmentFees: shipmentFees,
    };
}

// User Order

// let ordersData = [];

function getAllOrder() {
    return dispatch => {
        let user = JSON.parse(localStorage.user);

        let apiEndpoint = 'order/user/' + user._id;
        // console.log("Cek API : ", apiEndpoint);

        orderService.getAllOrders(apiEndpoint).then(
            (res) => {
                // console.log("Cek Material Data : ", res.data.material);
                let orders = res.data.order;
                // ordersData.data = res.data.order;
                console.log("Check Order Data : ", orders)

                if (res.data.status === 200) {
                    localStorage.setItem('ordersData', JSON.stringify(orders));
                    dispatch(getOrderList(orders));
                }
            }
        ).catch(
            err => {
                console.log(err);
            }
        );
    };
}

export function getOrderById(data){
    return dispatch => {
        let orderById = data;
        localStorage.setItem('getOrderById', JSON.stringify(orderById));

        if (orderById) {
            localStorage.getItem('getOrderById', JSON.stringify(orderById));
            dispatch(getOrderListDataById(orderById));
            history.push('/products/product-detail/'+ orderById._id);
        }

    };
};

export function getOrderByIdTable(data){
    return dispatch => {
        let orderById = data;
        localStorage.setItem('getOrderByIdTable', orderById);

        if (orderById) {
            localStorage.getItem('getOrderByIdTable', orderById);
            dispatch(getOrderListDataById(orderById));
            history.push('/products/product-detail/'+ orderById._id);
        }

    };
};

export function getOrderList(orders) {
    return {
        type: 'FETCHED_ALL_ORDERS',
        orders: orders,
    };
}

export function getOrderListDataById(orders) {
    return {
        type: 'FETCHED_ORDERS_BY_ID',
        ordersData: orders,
    };
}
