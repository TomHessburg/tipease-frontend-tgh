import {
  LOGIN_SUCCESS,
  TRANSFER_TO_BANK_FAIL,
  TRANSFER_TO_BANK_SUCCESS,
  TRANSFER_TO_BANK_START,
  PAY_YOURSELF_20_SUCCESS,
  EDIT_ACCOUNT_START,
  EDIT_ACCOUNT_SUCCESS,
  EDIT_ACCOUNT_FAIL,
  GET_ALL_SW_SUCCESS
} from "../actions";

const initialState = {
  isAuthenticated: false,
  transferSuccess: false,
  transferFail: false,
  transferStart: false,
  ubdateSuccess: false,
  updateFail: false,
  updatingAccount: false
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

    case EDIT_ACCOUNT_START:
      return {
        ...state,
        updateFail: false,
        ubdateSuccess: false,
        updatingAccount: true
      };
    case EDIT_ACCOUNT_SUCCESS:
      return {
        ...state,
        ...action.payload,
        ubdateSuccess: true,
        updateFail: false,
        updatingAccount: false
      };
    case EDIT_ACCOUNT_FAIL:
      return {
        ...state,
        updateFail: true,
        ubdateSuccess: false,
        updatingAccount: false
      };

    case GET_ALL_SW_SUCCESS:
      return {
        ...state,
        serviceWorkers: [...action.payload]
      };

    default:
      return state;
  }
};

export default rootReducer;
