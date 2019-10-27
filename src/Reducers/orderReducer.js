let auth = localStorage.getItem('auth');  // Status if user has authenticated - true or false

const initialState = auth ? {
    loggedIn: true,
    loading: true,
    materials: [], 
    id: '',
    name: '',
} : {};

export function authentication(state = initialState, action) {
    switch(action.type) {
        case 'FETCHED_ALL_MATERIALS':
            return {
                ...state,
                materials: action.materials,
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