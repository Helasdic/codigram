import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getListPost } from "../../actions/postAction";
import { Card, ListGroup, Image } from "react-bootstrap";

const Home = () => {
  const { getListPostsResult, getListPostsLoading, getListPostsError } = useSelector((state) => state.postsReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    //get list posts
    console.log("useeffeect home");
    dispatch(getListPost());
  }, [dispatch]);

  return (
    <>
      <section className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-8 col-md-8 mx-auto">
            <h1 className="fw-light">SELAMAT DATANG DI HASIL CODIGRAM</h1>
            <p className="lead text-body-secondary">
              Social media merupakan tempat sharing hal yang menarik dan berguna bagi sesame. Code.id ingin membuat aplikasi mirip seperti Instagram yang dinamakan “Codigram”. Dimana tujuan aplikasi tersebut user dapat melihat foto menarik
              mengenai dunia IT dan dunia coding. Fitur utama dari aplikasi ini adalah user bisa Login dan Register, lalu mereka bisa memposting gambar mereka sehingga akan muncul di home user lain.
            </p>
            <p>
              <Link to="/login" className="btn btn-primary btn-lg my-2">
                LOGIN
              </Link>
              <Link to="/register" className="btn btn-danger btn-lg my-2 ms-3">
                REGISTRASI
              </Link>
            </p>
          </div>
        </div>
      </section>

      <div className="album py-5 bg-body-tertiary">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {
              getListPostsResult
                ? getListPostsResult.map((post) => {
                    return (
                      <div className="col" key={post.id}>
                        {[].concat(post.User).map((user) => {
                          return (
                            <div key={user.id}>
                              <Card className="shadow-sm">
                                <Card.Header className="d-flex align-items-center">
                                  <Image style={{ width: "10%", height: "10%" }} src={user.image} alt="User" roundedCircle />
                                  <p className="ml-2 mt-3 ms-2">{user.username}</p>
                                </Card.Header>
                                <Card.Img src={post.image} alt="Post" />
                                <Card.Body>
                                  <Card.Title>Caption:</Card.Title>
                                  <Card.Text>{post.caption}</Card.Text>
                                </Card.Body>
                                <ListGroup className="list-group-flush">
                                  <ListGroup.Item>
                                    <div className="d-flex justify-content-between align-items-center">
                                      <div className="btn-group">
                                        <Link to={`/post/detail/${post.id}`}>
                                          <button type="button" className="btn btn-sm btn-outline-secondary">
                                            Selengkapnya
                                          </button>
                                        </Link>
                                      </div>
                                    </div>
                                  </ListGroup.Item>
                                </ListGroup>
                              </Card>
                            </div>
                          );
                        })}
                      </div>
                    );
                  })
                : "kosong"
              // getListPostsLoading ? (
              //   <p>Loading...</p>
              // )
              // : (
              //   <p>{getListPostsError ? getListPostsError : "Data Kosong"}</p>
              // )
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
