let token = localStorage.getItem('token');  // Users token
let auth = localStorage.getItem('auth');  // Status if user has authenticated - true or false
let user = localStorage.getItem('user'); // Users data

const initialState = auth ? {
    loggedIn: true,
    loading: true,    
    auth,
    token,
    user
} : {};

export function authentication(state = initialState, action) {
    switch(action.type) {
        case 'LOGIN_SUCCESS':
            return {
                loggingIn: true,
                loading: false,
                auth: action.auth,
                token: action.token,
                user: action.user
            };
        case 'SIGNUP_SUCCESS':
            return {
                loggingIn: false,
                loading: false,
            };
        case 'SIGNUP_FAILED':
            return {
                loggingIn: false,
                loading: false
            };
        case 'LOGIN_FAILED':
            return {
                loggingIn: false,
                loading: false
            };
        case 'LOGOUT_SUCCESS':
            return {
                auth: false
            };

        default:
            return state
    }
}