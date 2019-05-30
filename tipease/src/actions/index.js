import axios from "axios";

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";

export const TRANSFER_TO_BANK_START = "TRANSFER_TO_BANK_START";
export const TRANSFER_TO_BANK_SUCCESS = "TRANSFER_TO_BANK_SUCCESS";
export const TRANSFER_TO_BANK_FAIL = "TRANSFER_TO_BANK_FAIL";

export const PAY_YOURSELF_20_START = "PAY_YOURSELF_20_START";
export const PAY_YOURSELF_20_SUCCESS = "PAY_YOURSELF_20_SUCCESS";
export const PAY_YOURSELF_20_FAIL = "PAY_YOURSELF_20_FAIL";

export const loginSuccess = user => {
  return {
    type: LOGIN_SUCCESS,
    payload: user
  };
};

//opted againt this because of ease of routing on login.
//simply calling the axios call inside of the component ends up making for bit less code

// export const login = credentials => dispatch => {
//   dispatch({ type: LOGIN_START });

//   axios
//     .post(`https://buildtipease.herokuapp.com/auth/users/login`, credentials)
//     .then(res => {
//       console.log(res);
//       dispatch({ type: LOGIN_SUCCESS });
//     })
//     .catch(err => {
//       console.log(err);
//       dispatch({ type: LOGIN_FAIL });
//     });
// };

export const transferToBank = userId => dispatch => {
  console.log(userId);
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
      console.log(res);
      dispatch({
        type: TRANSFER_TO_BANK_SUCCESS
      });
    })
    .catch(err => {
      console.log(err);
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
      console.log(res);
      dispatch({ type: PAY_YOURSELF_20_SUCCESS });
    })
    .catch(err => {
      dispatch({ type: PAY_YOURSELF_20_FAIL });
    });
};
