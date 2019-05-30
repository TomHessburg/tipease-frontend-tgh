import {
  LOGIN_SUCCESS,
  TRANSFER_TO_BANK_FAIL,
  TRANSFER_TO_BANK_SUCCESS,
  TRANSFER_TO_BANK_START,
  PAY_YOURSELF_20_START,
  PAY_YOURSELF_20_SUCCESS,
  PAY_YOURSELF_20_FAIL
} from "../actions";

const initialState = {
  isAuthenticated: false,
  transferSuccess: false,
  transferFail: false,
  transferStart: false
};
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      return {
        isAuthenticated: true,
        ...action.payload.userInfo
      };

    case TRANSFER_TO_BANK_START:
      return {
        ...state,
        transferStart: true,
        transferSuccess: false,
        transferFail: false
      };

    case TRANSFER_TO_BANK_SUCCESS:
      console.log(state);
      return {
        ...state,
        transferStart: false,
        transferSuccess: true,
        transferFail: false,
        accountBalance: 0
      };
    case TRANSFER_TO_BANK_FAIL:
      return {
        ...state,
        transferStart: false,
        transferSuccess: false,
        transferFail: true
      };

    case PAY_YOURSELF_20_SUCCESS:
      return {
        ...state,
        accountBalance: state.accountBalance + 20
      };

    default:
      return state;
  }
};

export default rootReducer;
