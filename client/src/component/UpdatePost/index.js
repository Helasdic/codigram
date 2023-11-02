import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { UpdatePosts } from "../../actions/postAction";
import Swal from "sweetalert2";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Container, Card, Form, Row, Col, Image, Button } from "react-bootstrap";

export const EditPosts = () => {
  const getDataSession = () => {
    const keyString = sessionStorage.getItem("userdata");
    return JSON.parse(keyString);
  };
  const dataUser = getDataSession() ? getDataSession() : false;
  const { updatePostsResult } = useSelector((state) => state.PostsReducers);
  const [data, setData] = useState({
    caption: "",
    image: "https://via.placeholder.com/100",
    UserId: dataUser ? dataUser.data.id : "",
  });
  const [isUpdate, setIsUpdate] = useState(false);
  const [imageSave, setImageSave] = useState(null);
  const [oldImage, setOldImage] = useState("https://via.placeholder.com/100");
  const dispatch = useDispatch();
  const params = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const updatePost = () => {
    Swal.fire({
      title: "Apakah data sudah sesuai?",
      showCancelButton: true,
      confirmButtonText: "Submit",
    }).then((res) => {
      if (res.isConfirmed) {
        const formData = new FormData();
        formData.append("image", imageSave);
        formData.append("oldImage", oldImage);
        formData.append("caption", data.caption);
        formData.append("userid", data.UserId);
        setIsUpdate(true);
        dispatch(UpdatePosts(formData, params.id, dataUser ? dataUser.token : ""));
      }
    });
  };
  useEffect(() => {
    if (!dataUser) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Silahkan Login untuk Post Posts!",
        showConfirmButton: true,
        confirmButtonText: "Login",
        denyButtonText: "Cancel",
        showDenyButton: true,
      }).then((res) => {
        if (res.dismiss || res.isDenied) {
          navigate("/");
        } else if (res.isConfirmed) {
          navigate("/login");
        }
      });
    }
    if (isUpdate) {
      navigate(-1);
      let timerInterval;
      Swal.fire({
        title: "Edit Posts Success",
        html: "Auto Close",
        timer: 1000,
        showConfirmButton: false,
        timerProgressBar: true,
        willClose: () => {
          clearInterval(timerInterval);
        },
      }).then((r) => {});
    }
    setData({
      caption: location.state.value.caption,
      image: location.state.value.image,
      UserId: dataUser.data.id,
    });
    setOldImage(location.state.value.image);
  }, [updatePostsResult]);
  return (
    <Container className="pt-5">
      <Card>
        <Card.Header>
          <h3>Edit Posts</h3>
        </Card.Header>
        <Card.Body>
          <Form onSubmit={handleSubmit(updatePost)}>
            <Row>
              <Col md={12}>
                <Image src={data.image} style={{ width: "150px", height: "150px" }} alt="" className="mb-2 object-fit-contain" />
              </Col>
              <Col md={12}>
                <Form.Group controlId="image">
                  <Form.Label>Choose file to change image</Form.Label>
                  <Form.Control
                    type="file"
                    className="mb-2"
                    onChange={(e) => {
                      setImageSave(e.target.files[0]);
                      setData({ ...data, image: e.target.files[0] ? URL.createObjectURL(e.target.files[0]) : "https://via.placeholder.com/100" });
                    }}
                    minLength="10"
                  />
                </Form.Group>
              </Col>
              <Col md={12}>
                <Form.Group controlId="caption">
                  <Form.Label>Caption</Form.Label>
                  <Form.Control type="text" className="mb-2" onChange={(event) => setData({ ...data, caption: event.target.value })} value={data.caption} hidden minLength="10" required />
                </Form.Group>
              </Col>
              <Col md={12}>
                <Form.Group controlId="content">
                  <Form.Label>Caption</Form.Label>
                  <Form.Control as="textarea" onChange={(event) => setData({ ...data, caption: event.target.value })} value={data.caption} className="mb-2" placeholder="Caption" minLength="10" required />
                </Form.Group>
              </Col>
              <Col md={12}>
                <Button type="submit" variant="primary" className="w-100">
                  Post Posts
                </Button>
              </Col>
            </Row>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};
