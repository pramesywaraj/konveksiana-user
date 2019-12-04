let auth = localStorage.getItem('auth');  // Status if user has authenticated - true or false

const initialState = auth ? {
    loggedIn: true,
    loading: true,

    // Landing Order
    categories: [], 
    products: [],
    materials: [], 
    id: '',
    name: '',

    // User Order
    orders: [],
    ordersData: [],
    provinces:[],
    cities:[],
    districts:[],
    shipmentFees: [],
    orderStatuses: []
} : {};

export function orderPage(state = initialState, action) {
    switch(action.type) {
        case 'FETCHED_ALL_ORDERS':
            return {
                ...state,
                orders: action.orders,
                loading: false
            };
        case 'FETCHED_ORDERS_BY_ID':
            return {
                ...state,
                ordersData: action.ordersData,
                loading: false
            };
        case 'FETCHED_ALL_CATEGORIES':
            return {
                ...state,
                categories: action.categories,
                loading: false
            };
        case 'FETCHED_ALL_PRODUCTS':
            return {
                ...state,
                products: action.products,
                loading: false
            };
        case 'FETCHED_ALL_MATERIALS':
            return {
                ...state,
                materials: action.materials,
                loading: false
            };
        case 'FETCHED_ALL_PROVINCES':
            return {
                ...state,
                provinces: action.provinces,
                loading: false
            };
        case 'FETCHED_ALL_CITIES':
            return {
                ...state,
                cities: action.cities,
                loading: false
            };
        case 'FETCHED_ALL_DISTRICTS':
            return {
                ...state,
                districts: action.districts,
                loading: false
            };
        case 'FETCHED_ALL_SHIPMENT_FEES':
            return {
                ...state,
                shipmentFees: action.shipmentFees,
                loading: false
            };
        case 'FETCHED_ALL_ORDERSTATUSES':
            return {
                ...state,
                orderStatuses: action.orderStatuses,
                loading: false
            };
        case 'CREATE_ORDER_SUCCESS':
            return {
                loggingIn: true,
                loading: false,
            };
        case 'CREATE_ORDER_FAILED':
            return {
                loggingIn: false,
                loading: false,
            };
        default:
            return state
    }
}