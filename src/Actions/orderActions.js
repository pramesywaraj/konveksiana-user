import { orderService } from '../Services/orderService';
import { history } from '../Helpers/history';
import config from '../Services/config';

export const orderActions = {
    // Landing Order
    createOrder,
    getAllCategory,
    getAllMaterial,

    // User Order
    getAllOrder,
    getOrderById
};

// Landing Order

function createOrder(data) {
    return dispatch => {
        let apiEndpoint = 'order';
        let payload = new FormData();
        // payload.append('orderImage', data.orderImage);

        // console.log("Cek Image : ", data.orderImage);
        for (const file of data.orderImage) {
            payload.append('orderImage', file)
        }

        payload.append('userId', data.userId);
        payload.append('materialId', data.materialId);
        // payload.append('materialId', '5d79930c8c4a882f44b1b0fb');
        payload.append('color', data.color);
        payload.append('description', data.description);
        payload.append('quantity', data.quantity);
        payload.append('city', data.city);
        payload.append('detailAddress', data.detailAddress);

        console.log("Cek Data : ", payload);

        // fetch(config.baseUrl + apiEndpoint, {
        //     method: 'POST',
        //     headers: {
        //         'Authorization': 'Bearer ' + localStorage.getItem('token'),
        //         // 'Content-Type' : 'multipart/form-data; boundary=----WebKitFormBoundaryHl8DZV3dBSj0qBVe'
        //     },
        //     body: payload
        // })
        orderService.post(apiEndpoint, payload)
            .then(res => {
                if(res.data.status === 200) {
                    alert(res.data.Message);
                    dispatch(createOrderSuccess(res.data));
                    history.push('/user-order');
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
                // console.log("Cek Material Data : ", res.data.material);
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

function getAllMaterial() {
    return dispatch => {
        let apiEndpoint = 'material';

        orderService.getAllMaterials(apiEndpoint).then(
            (res) => {
                // console.log("Cek Material Data : ", res.data.material);
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

export function getMaterialList(materials) {
    return {
        type: 'FETCHED_ALL_MATERIALS',
        materials: materials,
    };
}

// User Order

let ordersData = [];

function getAllOrder() {
    return dispatch => {
        let user = JSON.parse(localStorage.user);

        let apiEndpoint = 'order/user/' + user._id;
        console.log("Cek API : ", apiEndpoint);

        orderService.getAllOrders(apiEndpoint).then(
            (res) => {
                // console.log("Cek Material Data : ", res.data.material);
                let orders = res.data.order;
                ordersData.data = res.data.order;
                console.log("Check Order Data : ", ordersData)

                if (res.data.status === 200) {
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
        dispatch(getOrderListDataById(data));
        console.log("Check Data : ", data)
        return (data === undefined) ? ordersData.data[0] : ordersData.data.find(x => x.data === data);    
    }
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
        ordersData: ordersData,
    };
}
