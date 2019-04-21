import { LOGIN_SUCCESS } from "../actions";

const initialState = {
  isAuthenticated: false
};
const rootReducer = (state = initialState, action) => {
 
  switch (action.type) {
    case LOGIN_SUCCESS: 
      localStorage.setItem("token", action.payload.token);
      return{
        isAuthenticated: true,
        ...action.payload.userInfo
      }


    default:
      return state;
  }
};

export default rootReducer;
 