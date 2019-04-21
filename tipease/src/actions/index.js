export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
//export const LOGIN_FAIL = "LOGIN_FAIL";

export const loginSuccess = user => {
    return{
        type: LOGIN_SUCCESS,
        payload: user
    }
}