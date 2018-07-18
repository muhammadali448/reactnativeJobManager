
import {
    EMAIL_CHANGE,
    PASSWORD_CHANGE,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAILED,
    LOGIN_USER
} from '../actions';

const initialState = {
    email: '',
    password: '',
    user: null,
    error: '',
    loading: false
}

export default (state = initialState, action) => {
    console.log('Actions', action)
    switch (action.type) {
        case EMAIL_CHANGE:
            return { ...state, email: action.payload };
        case PASSWORD_CHANGE:
            return { ...state, password: action.payload };
        case LOGIN_USER_SUCCESS:
            return { ...state, ...initialState ,user: action.payload }
        case LOGIN_USER_FAILED:
            return { ...state, error: 'Authentication Failed', password: '', loading: false }
        case LOGIN_USER:
            return { ...state, loading: true, error: ''}    
        default:
            return state;
    }
}