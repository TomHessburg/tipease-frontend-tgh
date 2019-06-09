import axios from "axios";

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";

export const TRANSFER_TO_BANK_START = "TRANSFER_TO_BANK_START";
export const TRANSFER_TO_BANK_SUCCESS = "TRANSFER_TO_BANK_SUCCESS";
export const TRANSFER_TO_BANK_FAIL = "TRANSFER_TO_BANK_FAIL";

export const PAY_YOURSELF_20_START = "PAY_YOURSELF_20_START";
export const PAY_YOURSELF_20_SUCCESS = "PAY_YOURSELF_20_SUCCESS";
export const PAY_YOURSELF_20_FAIL = "PAY_YOURSELF_20_FAIL";

export const EDIT_ACCOUNT_START = "EDIT_ACCOUNT_START";
export const EDIT_ACCOUNT_SUCCESS = "EDIT_ACCOUNT_SUCCESS";
export const EDIT_ACCOUNT_FAIL = "EDIT_ACCOUNT_FAIL";

export const GET_ALL_SW_START = "GET_ALL_SW_START";
export const GET_ALL_SW_SUCCESS = "GET_ALL_SW_SUCCESS";
export const GET_ALL_SW_FAIL = "GET_ALL_SW_FAIL";

export const loginSuccess = user => {
  return {
    type: LOGIN_SUCCESS,
    payload: user
  };
};

export const editSWAccount = (newSettings, id) => dispatch => {
  dispatch({ type: EDIT_ACCOUNT_START });

  const token = localStorage.getItem("token");

  axios
    .put(
      `https://buildtipease.herokuapp.com/serviceWorkers/${id}`,
      newSettings,
      { headers: { authorization: token } }
    )
    .then(response => {
      dispatch({
        type: EDIT_ACCOUNT_SUCCESS,
        payload: newSettings
      });
    })
    .catch(err => {
      dispatch({
        type: EDIT_ACCOUNT_FAIL
      });
    });
};

export const editUserAccount = (newSettings, id) => dispatch => {
  dispatch({ type: EDIT_ACCOUNT_START });

  const token = localStorage.getItem("token");

  axios
    .put(`https://buildtipease.herokuapp.com/users/${id}`, newSettings, {
      headers: { authorization: token }
    })
    .then(response => {
      dispatch({
        type: EDIT_ACCOUNT_SUCCESS,
        payload: newSettings
      });
    })
    .catch(err => {
      dispatch({
        type: EDIT_ACCOUNT_FAIL
      });
    });
};

export const transferToBank = userId => dispatch => {
  dispatch({
    type: TRANSFER_TO_BANK_START
  });

  const token = localStorage.getItem("token");

  axios
    .put(
      `https://buildtipease.herokuapp.com/serviceWorkers/transferToBank/${userId}`,

      {},
      { headers: { authorization: token } }
    )
    .then(res => {
      dispatch({
        type: TRANSFER_TO_BANK_SUCCESS
      });
    })
    .catch(err => {
      dispatch({
        type: TRANSFER_TO_BANK_FAIL
      });
    });
};

//for testing other parts of the app, helps to easily be able to add some account balance :)
export const payYourself20Bucks = userId => dispatch => {
  const token = localStorage.getItem("token");

  dispatch({ type: PAY_YOURSELF_20_START });

  axios
    .put(
      `https://buildtipease.herokuapp.com/serviceWorkers/pay/${userId}`,
      { payment: 20 },
      { headers: { authorization: token } }
    )
    .then(res => {
      dispatch({ type: PAY_YOURSELF_20_SUCCESS });
    })
    .catch(err => {
      dispatch({ type: PAY_YOURSELF_20_FAIL });
    });
};

export const getAllServiceWorkers = () => dispatch => {
  const token = localStorage.getItem("token");
  dispatch({ type: GET_ALL_SW_START });
  axios
    .get("https://buildtipease.herokuapp.com/serviceWorkers", {
      headers: { authorization: token }
    })
    .then(res => {
      dispatch({ type: GET_ALL_SW_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: GET_ALL_SW_FAIL });
    });
};

export const tipServiceWorker = (id, payment) => dispatch => {
  const token = localStorage.getItem("token");
  axios
    .put(
      `https://buildtipease.herokuapp.com/serviceWorkers/pay/${id}`,
      payment,
      { headers: { authorization: token } }
    )
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    });
};

export const rateServiceWorker = (id, rating) => dispatch => {
  const token = localStorage.getItem("token");
  axios
    .put(
      `https://buildtipease.herokuapp.com/serviceWorkers/rate/${id}`,
      rating,
      { headers: { authorization: token } }
    )
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    });
};
