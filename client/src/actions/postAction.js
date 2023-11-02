import axios from "axios";
import Swal from "sweetalert2";

export const GET_LIST_POST = "GET-LIST-POST";
export const GET_ACTIVE_POST = "GET-ACTIVE-POST";
export const ADD_POST = "ADD_POST";
export const DELETE_POST = "DELETE_POST";
export const UPDATE_POST = "UPDATE_POST";
export const GET_DETAIL_POST = "DETAIL_POST";
export const RESET_INITIAL_STATE_POST = "RESET_INITIAL_STATE_POST";

export const resetInitialStatePost = () => {
  return (dispatch) => {
    dispatch({ type: RESET_INITIAL_STATE_POST });
  };
};

export const getListPost = () => {
  return (dispatch) => {
    //loading
    dispatch({
      type: GET_LIST_POST,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    //get API
    axios({
      method: "GET",
      url: "http://localhost:5000/posts",
      timeout: 120000,
    })
      .then((response) => {
        console.log("3. Berhasil dapet Data:", response.data);
        dispatch({
          type: GET_LIST_POST,
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        console.log("3. Gagal dapet Data:", error.message);
        dispatch({
          type: GET_LIST_POST,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};
export const getActivePost = () => {
  console.log("2. masuk action");
  return (dispatch) => {
    // loading

    dispatch({
      type: GET_ACTIVE_POST,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    //get api
    axios({
      method: "GET",
      url: `http://localhost:5000/posts?status=true`,
      timeout: 120000,
    })
      .then((response) => {
        //berhasil get

        console.log("3. berhasil get data: ", response.data);
        dispatch({
          type: GET_ACTIVE_POST,
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        //gagal get api
        console.log("3. gagal get data: ", error.message);

        dispatch({
          type: GET_ACTIVE_POST,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};
export const addPost = (data) => {
  console.log("2. masuk action");
  return (dispatch) => {
    // loading

    dispatch({
      type: ADD_POST,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    //get api
    axios({
      method: "POST",
      url: `http://localhost:5000/posts`,
      // headers: {
      //   Authorization: Cookies.get("accessToken"),
      // },
      timeout: 120000,
      data: data,
    })
      .then((response) => {
        //berhasil get

        Swal.fire("Berhasil menambah data");
        console.log("3. berhasil create data: ", response.data);
        dispatch({
          type: ADD_POST,
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        //gagal get api
        console.log("3. gagal menambah data: ", error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.response.data.message,
        });
        dispatch({
          type: ADD_POST,
          payload: {
            loading: false,
            data: false,
            errorMessage: error,
          },
        });
      });
  };
};
export const deletePost = (id) => {
  console.log("2. masuk action");
  return (dispatch) => {
    // loading

    dispatch({
      type: DELETE_POST,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    //get api
    axios({
      method: "DELETE",
      url: `http://localhost:5000/posts/${id}`,
      // headers: {
      //   Authorization: Cookies.get("accessToken"),
      // },
      timeout: 120000,
    })
      .then((response) => {
        //berhasil get

        console.log("3. berhasil create data: ", response.data);
        dispatch({
          type: DELETE_POST,
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        //gagal get api
        console.log("3. gagal get data: ", error.message);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.response.data.message,
        });

        dispatch({
          type: DELETE_POST,
          payload: {
            loading: false,
            data: false,
            errorMessage: error,
          },
        });
      });
  };
};
export const UpdatePosts = (id, data) => {
  console.log("2. masuk action");
  return (dispatch) => {
    // loading

    dispatch({
      type: UPDATE_POST,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    //get api
    axios({
      method: "PUT",
      url: `http://localhost:5000/posts/${id}`,
      // headers: {
      //   Authorization: Cookies.get("accessToken"),
      // },
      timeout: 120000,
      data: data,
    })
      .then((response) => {
        //berhasil get

        Swal.fire("Berhasil mengubah data");
        console.log("3. berhasil mengubah data: ", response.data);
        dispatch({
          type: UPDATE_POST,
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        //gagal get api
        console.log("3. gagal get data: ", error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.response.data.message,
        });

        dispatch({
          type: UPDATE_POST,
          payload: {
            loading: false,
            data: false,
            errorMessage: error,
          },
        });
      });
  };
};
export const getDetailPost = (id) => {
  console.log("2. masuk action");
  return (dispatch) => {
    // loading

    dispatch({
      type: GET_DETAIL_POST,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    //get api
    axios({
      method: "GET",
      url: `http://localhost:5000/posts/${id}`,
      timeout: 120000,
    })
      .then((response) => {
        //berhasil get

        console.log("3. berhasil get data: ", response.data);
        dispatch({
          type: GET_DETAIL_POST,
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        //gagal get api
        console.log("3. gagal get data: ", error.message);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.response.data.message,
        });

        dispatch({
          type: GET_DETAIL_POST,
          payload: {
            loading: false,
            data: false,
            errorMessage: error,
          },
        });
      });
  };
};
