import { authService } from '../Services/authService';
import { history } from '../Helpers/history';

export const userActions = {
    signup,
    login,
    logout
};

function signup(name, phone, email, password, sex) {
    return dispatch => {
        let apiEndpoint = 'user/signUp';
        let payload = {
            role: 1,
            name: name,
            phoneNumber: phone,
            email : email,
            password : password,
            sex: sex
        }

        authService.post(apiEndpoint, payload)
            .then(res => {
                if(res.data.status === 200) {
                    dispatch(signupSuccess(res.data));
                    history.push('/login');
                    alert(res.data.message);
                } else {
                    dispatch(signupFailed());
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

        authService.post(apiEndpoint, payload)
            .then(res => {
                if(res.data.status === 200) {
                    localStorage.setItem('token', res.data.token);
                    localStorage.setItem('auth', true);
                    localStorage.setItem('user', JSON.stringify(res.data.result));                    
                    dispatch(setUserDetails(res.data));
                    history.push('/dashboard');
                    alert(res.data.message);
                } else {
                    dispatch(loginFailed());
                    alert(res.data.message);
                }
            })
    };
}

function logout() {
    return dispatch => {
        alert('Anda Keluar dari Aplikasi');
        localStorage.removeItem('token');
        localStorage.removeItem('auth');
        localStorage.removeItem('user');
        dispatch(logoutUser());
        history.push('/login');
    }
}

export function setUserDetails(data) {
    return {
        type: "LOGIN_SUCCESS",
        auth: true,
        token: data.token,
        user: JSON.stringify(data.result)
    }
}

export function signupSuccess(data) {
    return {
        type: "SIGNUP_SUCCESS",
    }
}

export function loginFailed() {
    return {
        type: "LOGIN_FAILED",
    }
}

export function signupFailed() {
    return {
        type: "SIGNUP_FAILED",
    }
}

export function logoutUser() {
    return {
        type: "LOGOUT_SUCCESS",
        auth: false,
        token: '',
        user: ''
    }
}
