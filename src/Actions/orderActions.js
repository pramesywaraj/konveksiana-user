import { orderService } from '../Services/orderService';
import { history } from '../Helpers/history';

export const orderActions = {
    createOrder,
    getAllMaterial
};

function createOrder(data) {
    return dispatch => {
        let apiEndpoint = 'order';
        let payload = new FormData();
        payload.append('orderImage', data.orderImage);
        payload.append('userId', data.userId);
        payload.append('materialId', data.materialId);
        // payload.append('materialId', '5d79930c8c4a882f44b1b0fb');
        payload.append('color', data.color);
        payload.append('description', data.description);
        payload.append('quantity', data.quantity);
        payload.append('city', data.city);
        payload.append('detailAddress', data.detailAddress);

        console.log("Cek Data : ", payload);

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

// function logout() {
//     return dispatch => {
//         alert('Anda Keluar dari Aplikasi');
//         localStorage.removeItem('token');
//         localStorage.removeItem('auth');
//         localStorage.removeItem('user');
//         dispatch(logoutUser());
//         history.push('/login');
//     }
// }

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

export function getMaterialList(materials) {
    return {
        type: 'FETCHED_ALL_MATERIALS',
        materials: materials,
    };
}