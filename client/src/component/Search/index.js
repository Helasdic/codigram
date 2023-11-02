import { Button, Form } from "react-bootstrap";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searching } from "../../actions/postAction";
import { Transition } from "@headlessui/react";

const Search = () => {
  const { searchingResult, searchingLoading, searchingError } = useSelector((state) => state.list);
  const dispatch = useDispatch();

  const [showCards, setShowCards] = useState(false);

  const [item, setItem] = useState({
    caption: "",
  });

  const createHandler = (e) => {
    setItem({ ...item, [e.target.name]: e.target.value });
    //console.log(item);
  };

  const searching1 = (e) => {
    e.preventDefault();
    dispatch(searching(item.caption, localStorage.getItem("token")));
  };

  function Card({ id, image, caption, showCard }) {
    return (
      <Transition show={true} appear={true} enter="transition-opacity duration-5900" enterFrom="opacity-0" enterTo="opacity-100" leave="transition-opacity duration-5900" leaveFrom="opacity-100" leaveTo="opacity-0">
        <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{image}</div>
            <p className="text-gray-700 text-base overflow-hidden" style={{ overflowWrap: "break-word" }}>
              {caption}
            </p>
          </div>
        </div>
      </Transition>
    );
  }

  return (
    <div>
      <Form encType="multipart/form-data" onSubmit={(e) => searching1(e)}>
        <Form.Group className="mb-3" controlId="formBasicCaption">
          <Form.Label className="text-center">Caption</Form.Label>
          <Form.Control as="textarea" name="caption" placeholder="Caption" onChange={(e) => createHandler(e)} />
        </Form.Group>

        <hr></hr>

        <div className="d-grid">
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </div>
      </Form>
      <div className="container mx-auto p-4 flex flex-wrap">
        {searchingResult ? (
          searchingResult.data.map((posting) => {
            return <Card key={posting.id} image={posting.image} caption={posting.caption} showCard={showCards} />;
          })
        ) : searchingLoading ? (
          <p>Loading . . .</p>
        ) : (
          <p>{searchingError ? searchingError : "Data Kosong"}</p>
        )}
      </div>
    </div>
  );
};

export default Search;
