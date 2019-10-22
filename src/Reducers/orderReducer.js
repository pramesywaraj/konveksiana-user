let auth = localStorage.getItem('auth');  // Status if user has authenticated - true or false

const initialState = auth ? {
    loggedIn: true,
    loading: true,    
} : {};

export function authentication(state = initialState, action) {
    switch(action.type) {
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