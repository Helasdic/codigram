import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getListPost } from "../../actions/postAction";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

function ListPost() {
  const { getListPostsResult, getListPostsLoading, getListPostsError } = useSelector((state) => state.PostsReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("1. use effect component did mount");
    dispatch(getListPost());
  }, [dispatch]);

  return (
    <div>
      <h3>List Post</h3>
      <div className="album py-5 bg-body-tertiary">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {getListPostsResult ? (
              getListPostsResult.map((users, posts) => (
                <div className="col" key={posts.id}>
                  <div className="card shadow-sm">
                    <div className="card-header">
                      <img src={users.image} alt="User" className="user-avatar" />
                      <span className="user-username">{users.username}</span>
                    </div>
                    <img src={posts.image} alt="Post" className="bd-placeholder-img card-img-top" />
                    <div className="card-body">
                      <h5 className="card-title">Caption:</h5>
                      <p className="card-text">{posts.caption}</p>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                          <Link to={`/post/detail/${posts.id}`}>
                            <button type="button" className="btn btn-sm btn-outline-secondary">
                              Selengkapnya
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : getListPostsLoading ? (
              <p>Loading...</p>
            ) : (
              <p>{getListPostsError ? getListPostsError : "Data Kosong"}</p>
            )}
          </div>
        </div>
      </div>
      <main>
        <div>
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default ListPost;
