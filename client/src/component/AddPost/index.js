import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addPost, resetInitialStatePost } from "../../actions/postAction";
import { Button, Container, Form } from "react-bootstrap";

const AddPost = () => {
  const navigate = useNavigate();
  const [caption, setCaption] = useState("");
  const [image, setImage] = useState("");
  const userId = "";

  const { addPostsResult, addPostsError } = useSelector((state) => state.postsReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    if (addPostsResult) {
      // window.location = '/post';
      navigate("/post");
    }

    if (addPostsError) {
      if (addPostsError.response.status === 401) {
        navigate("/logout");
        dispatch(resetInitialStatePost());
      }
    }
  }, [addPostsResult, dispatch, navigate, addPostsError]);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      addPost({
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
            <h1 className="display-7 fw-bold col-md-12">Tambah Postingan</h1>
            <div className="py-5 col-md-6">
              <Form onSubmit={(e) => handleSubmit(e)}>
                <Form.Group className="mb-3">
                  <Form.Label>Caption</Form.Label>
                  <Form.Control type="text" name="judul" value={caption} onChange={(e) => setCaption(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Link Gambar</Form.Label>
                  <Form.Control type="text" value={image} onChange={(e) => setImage(e.target.value)} />
                </Form.Group>
                <Button type="submit" variant="primary">
                  Submit
                </Button>
              </Form>
            </div>
          </Container>
        </div>
      </Container>
    </>
  );
};

export default AddPost;
