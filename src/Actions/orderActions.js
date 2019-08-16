import { orderService } from '../Services/authService';
import { history } from '../Helpers';

export const orderAction = {
    getOrder
};

function getOrder() {
    return dispatch => {
        let apiEndpoint = 'order';
        orderService.get(apiEndpoint)
            .then((res) => {
                if(res.data.status) {
                    dispatch(getOrderList(res.data));
                }
            })
    }
} 

export function getOrderList(order) {
    return {
        type: 'FETCHED_ALL_ORDERS',
        order: order
    }
}