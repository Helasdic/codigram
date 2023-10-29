import { GET_LIST_POST } from "../../actions/postAction";

const initialState = {
  getListPostsResult: false,
  getListPostsLoading: false,
  getListPostsError: false,
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LIST_POST:
      console.log("4. Masuk Reducer");
      return {
        ...state,
        getListPostsResult: action.payload.data,
        getListPostsLoading: action.payload.loading,
        getListPostsError: action.payload.errorMessage,
      };
    default:
      return state;
  }
};

export default postsReducer;
