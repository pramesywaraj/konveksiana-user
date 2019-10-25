import { orderService } from '../Services/orderService';
import { history } from '../Helpers/history';

export const orderActions = {
    createOrder,
    login
};

function createOrder(data) {
    return dispatch => {
        let HTTPOption = localStorage.token;
        let apiEndpoint = 'order';
        let payload = {
            orderImage: data.orderImage,
            userId: data.userId,
            materialId: data.materialId,
            color: data.color,
            description: data.description,
            quantity: data.quantity,
            price: data.price
        }

        console.log("Cek Data : ", payload);

        orderService.post(apiEndpoint, payload, HTTPOption)
            .then(res => {
                if(res.data.status === 200) {
                    dispatch(createOrderSuccess(res.data));
                    history.push('/user-order');
                    alert(res.data.message);
                } else {
                    dispatch(createOrderFailed());
                    alert(res.data.message);
                }
            })
    };
}

function login(email, password) {
    return dispatch => {
        let apiEndpoint = 'user/signIn';
        let payload = {
            email : email,
            password : password
        }

        orderService.post(apiEndpoint, payload)
            .then(res => {
                if(res.data.status === 200) {
                    localStorage.setItem('token', res.data.token);
                    localStorage.setItem('auth', true);
                    localStorage.setItem('user', JSON.stringify(res.data.result));                    
                    dispatch(createOrderSuccess(res.data));
                    history.push('/dashboard');
                    alert(res.data.message);
                } else {
                    dispatch(createOrderFailed());
                    alert(res.data.message);
                }
            })
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