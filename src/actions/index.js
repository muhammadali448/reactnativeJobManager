
import firebase from 'firebase'

export const EMAIL_CHANGE = 'EMAIL_CHANGE';
export const PASSWORD_CHANGE = 'PASSWORD_CHANGE';
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS'
export const LOGIN_USER_FAILED = 'LOGIN_USER_FAILED'
export const LOGIN_USER = 'LOGIN_USER'

export const emailChange = (text) => {
    return {
        type: EMAIL_CHANGE,
        payload: text
    }
}

export const passwordChange = (text) => {
    return {
        type: PASSWORD_CHANGE,
        payload: text
    }
}

export const loginUser = ({ email, password }) => {

    return (dispatch) => {

        dispatch({
            type: LOGIN_USER            
        })        

        firebase.auth().signInWithEmailAndPassword(email, password)
        .then((user) => loginUserSuccess(dispatch, user))
        .catch((error) => {
            console.log(error);
            firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((user) => loginUserSuccess(dispatch, user)).catch(() => 
            loginUserFailed(dispatch)
        )
        })
    }
}

const loginUserFailed = (dispatch) => {
    dispatch({
        type: LOGIN_USER_FAILED
    })
}

const loginUserSuccess = (dispatch, user) => {
    dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: user
    })
}