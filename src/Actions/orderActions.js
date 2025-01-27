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
    getOrderStatus,

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
                var token = sessionStorage.getItem('token');
                var auth = sessionStorage.getItem('auth');
                var user = sessionStorage.getItem('user');
                var ordersData = sessionStorage.getItem('ordersData');
        
                sessionStorage.clear();
                sessionStorage.setItem('token', token);                   
                sessionStorage.setItem('auth', auth);                   
                sessionStorage.setItem('user', user);                   
                sessionStorage.setItem('ordersData', ordersData);                           

                if(res.data.status === 200) {
                    dispatch(createOrderSuccess(res.data)); 
                    alert(res.data.Message);
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
            destinationCityId: sessionStorage.district,
            weightPackage: sessionStorage.weightPrediction,
            expedition: sessionStorage.courier
        };

        orderService.getShipmentFees(apiEndpoint, payload).then(
            (res) => {
                let shipmentFees = res.data.rajaongkir.results[0].costs;
                if (res.data.rajaongkir.status.code === 200) {
                    if(shipmentFees !== undefined || shipmentFees.length !== 0){
                        dispatch(getShipmentFeesList(shipmentFees));
                    }
                    else{
                        dispatch(getShipmentFeesList("Tidak Tersedia"));
                    }
                }
            }
        ).catch(
            err => {
                console.log(err);
            }
        );
    };
}

function getOrderStatus(data) {
    return dispatch => {
        let apiEndpoint = 'order/get/base-id';
        console.log("cek data : ", data)

        let payload = {
            baseId: data,
        };

        orderService.getOrderStatuses(apiEndpoint, payload).then(
            (res) => {
                let orderStatuses = res.data.order;
                if (res.data.status === 200) {
                    dispatch(getOrderStatusesList(orderStatuses));
                }
                else{
                    alert("Harap Cek Kembali Nomor Status Pesanan Kalian")
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

export function getOrderStatusesList(orderStatuses) {
    return {
        type: 'FETCHED_ALL_ORDERSTATUSES',
        orderStatuses: orderStatuses,
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
        let user = JSON.parse(sessionStorage.user);

        let apiEndpoint = 'order/user/' + user._id;
        // console.log("Cek API : ", apiEndpoint);

        orderService.getAllOrders(apiEndpoint).then(
            (res) => {
                // console.log("Cek Material Data : ", res.data.material);
                let orders = res.data.order;
                // ordersData.data = res.data.order;
                console.log("Check Order Data : ", orders)

                if (res.data.status === 200) {
                    sessionStorage.setItem('ordersData', JSON.stringify(orders));
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
        sessionStorage.setItem('getOrderById', JSON.stringify(orderById));

        if (orderById) {
            sessionStorage.getItem('getOrderById', JSON.stringify(orderById));
            dispatch(getOrderListDataById(orderById));
            history.push('/products/product-detail/'+ orderById._id);
        }

    };
};

export function getOrderByIdTable(data){
    return dispatch => {
        let orderById = data;
        sessionStorage.setItem('getOrderByIdTable', orderById);

        if (orderById) {
            sessionStorage.getItem('getOrderByIdTable', orderById);
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
