import { LOGIN_USERS, DETAILS_USERS, RESET_INITIAL_STATE_USER } from "../../actions/userAction";

const initialState = {
  loginUserResult: false,
  loginUserLoading: false,
  loginUserError: false,
  getDetailUserResult: false,
  getDetailUserLoading: false,
  getDetailUserError: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case RESET_INITIAL_STATE_USER:
      return {
        ...initialState,
      };

    case LOGIN_USERS:
      console.log("4. Masuk reduces");
      return {
        ...state,
        loginUserResult: action.payload.data,
        loginUserLoading: action.payload.loading,
        loginUserError: action.payload.errorMessage,
      };

    // case LOGOUT_USER:
    //   console.log("4. Masuk reduces");
    //   return {
    //     ...state,
    //     loginUserResult: false,
    //   };

    case DETAILS_USERS:
      console.log("4. Masuk reduces");
      return {
        ...state,
        getDetailUserResult: action.payload.data,
        getDetailUserLoading: action.payload.loading,
        getDetailUserError: action.payload.errorMessage,
      };

    default:
      return state;
  }
};

export default userReducer;
