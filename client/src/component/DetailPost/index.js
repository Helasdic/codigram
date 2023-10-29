import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetailPost } from "../../actions/postAction";

const DetailPost = () => {
  let { id } = useParams();

  const { detailPostsResult, detailPostsLoading, detailPostsError } = useSelector((state) => state.postsReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    //get list posts
    console.log("useeffeect post");
    dispatch(getDetailPost(id));
  }, [dispatch, id]);

  return (
    <>
      <div className="container">
        {detailPostsResult ? (
          <article className="blog-post">
            <img className="col-md-12" src={detailPostsResult.data.image} alt="img-detail" />
            <h2 className="display-5 link-body-emphasis mb-1 my-5">{detailPostsResult.data.caption}</h2>
            <p className="blog-post-meta">
              Posted by <span>{detailPostsResult.data.user.nama}</span>
            </p>

            <div>{detailPostsResult.data.deskripsi}</div>
          </article>
        ) : detailPostsLoading ? (
          <p>Loading...</p>
        ) : (
          <p>{detailPostsError ? detailPostsError : "Data Kosong"}</p>
        )}
      </div>
    </>
  );
};

export default DetailPost;
