import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { getDetailPost, resetInitialStatePost, updatePost } from "../../actions/postAction";
import { Button, Container, Form, Alert } from "react-bootstrap";

const UpdatePost = () => {
  const navigate = useNavigate();
  let { id } = useParams();
  const [caption, setCaption] = useState("");
  const [image, setImage] = useState("");
  const userId = "";

  const { detailPostsResult, detailPostsLoading, detailPostsError, updatePostsResult, updatePostsError } = useSelector((state) => state.postsReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    //get list posts
    console.log("useeffeect post");
    dispatch(getDetailPost(id));
  }, [dispatch, id]);

  useEffect(() => {
    //get list posts
    if (detailPostsResult) {
      setCaption(detailPostsResult.data.caption);
      setImage(detailPostsResult.data.image);
    }

    if (updatePostsError) {
      if (updatePostsError.response.status === 401) {
        navigate("/logout");
        dispatch(resetInitialStatePost());
      }
    }
  }, [dispatch, id, detailPostsResult, updatePostsError, navigate]);

  useEffect(() => {
    if (updatePostsResult) {
      // window.location = '/post';
      navigate("/post");
    }
  }, [updatePostsResult, dispatch, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      updatePost(id, {
        caption: caption,
        image: image,
        user_id: userId,
      })
    );
  };

  return (
    <>
      <Container className="py-4">
        <div className="mb-4 bg-body-tertiary rounded-3">
          <Container fluid>
            <h1 className="display-7 fw-bold col-md-12 text-uppercase">Ubah Postingan</h1>
            <div className="py-5 col-md-6">
              {detailPostsResult ? (
                <Form onSubmit={(e) => handleSubmit(e)}>
                  <Form.Group className="mb-3">
                    <Form.Label>Caption</Form.Label>
                    <Form.Control type="text" value={caption} onChange={(e) => setCaption(e.target.value)} />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Link Gambar</Form.Label>
                    <Form.Control type="text" value={image} onChange={(e) => setImage(e.target.value)} />
                  </Form.Group>
                  <Button type="submit" variant="primary">
                    Submit
                  </Button>
                </Form>
              ) : detailPostsLoading ? (
                <p>Loading...</p>
              ) : (
                <Alert variant="warning">{detailPostsError ? detailPostsError : "Data Kosong"}</Alert>
              )}
            </div>
          </Container>
        </div>
      </Container>
    </>
  );
};

export default UpdatePost;
