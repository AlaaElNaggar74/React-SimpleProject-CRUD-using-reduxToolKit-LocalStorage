import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  addpost,
  deletepost,
  updatepost,
  clearall,
} from "../ReduxFolder/Slicess/PostSlice";

const Posts = () => {
  let [inputtTitle, setinputttTitle] = useState("");
  let [inputtDescrp, setinputttDescrip] = useState("");
  let [inputtupdateTitle, setinputtupdateTitle] = useState("");
  let [inputtupdateDescrp, setinputttupdateDescrip] = useState("");
  let [counttt, setcounttt] = useState(0);
  let [id, setId] = useState(0);
  let [work, setiswork] = useState(false);
  let dispatch = useDispatch();
  let post = useSelector((state) => state.posts.item);

  return (
    <div className="postpage">
      <div className="form d-flex align-items-end ">
        <div className="me-3 col-2">
          <label
            htmlFor="formGroupExampleInput"
            className="form-label fs-5 fw-bold"
          >
            Title :
          </label>
          <input
            required
            type="text"
            value={inputtTitle}
            className="form-control"
            placeholder="Enter The Title"
            onChange={(e) => setinputttTitle(e.target.value)}
          />
        </div>
        <div className="me-3 col-6 ">
          <label
            htmlFor="formGroupExampleInput2"
            className=" form-label fs-5 fw-bold"
          >
            Description :
          </label>
          <input
            required
            type="text"
            value={inputtDescrp}
            className="form-control"
            placeholder="Enter The Description"
            onChange={(e) => setinputttDescrip(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="btn btn-danger fs-5 fw-bold  px-2"
          onClick={() => {
            setcounttt(counttt + 1);
            if (
              inputtTitle !== " " &&
              inputtDescrp !== " " &&
              inputtTitle !== "" &&
              inputtDescrp !== ""
            ) {
              dispatch(
                addpost({
                  id: counttt,
                  Title: inputtTitle,
                  Description: inputtDescrp,
                })
              );
              setinputttTitle("");
              setinputttDescrip("");
            }
          }}
        >
          ADD
        </button>
      </div>
      <p className="line my-5 text-center">
        <button
          type="button"
          className="btn btn-danger fs-5 fw-bold  px-2"
          onClick={() => {
            dispatch(clearall());
          }}
        >
          CLEAR
        </button>
      </p>

      <div className="postcontainer border border-3 p-3  col-9 mb-5">
        {post.length > 0 ? (
          post.map((post) => (
            <div
              className="posts border border-1 border-primary  p-3"
              key={post.id}
            >
              <h3>
                Post Title:<span className="fs-5 ps-3"> {post.Title}</span>{" "}
              </h3>
              <h4 className="mt-4 mb-3">
                {" "}
                Post Description:{" "}
                <span className="fs-5 ps-3">{post.Description}</span>
              </h4>
              <div className="buttn">
                <button
                  type="button"
                  className="btn btn-danger me-3"
                  onClick={() => {
                    work === false ? setiswork(true) : setiswork(false);
                    setId(post.id);
                  }}
                >
                  Edit
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => {
                    dispatch(deletepost(post));
                    setiswork(false);
                  }}
                >
                  Delete
                </button>
                {id === post.id && work === true ? (
                  <div className="row mt-3">
                    <div className="uppdatBox d-flex align-items-end">
                      <div className="me-3 col-3">
                        <label
                          htmlFor="formGroupExampleInput"
                          className="form-label fw-bold"
                        >
                          New Title :
                        </label>
                        <input
                          required
                          type="text"
                          value={inputtupdateTitle}
                          className="form-control"
                          placeholder="New Title"
                          onChange={(e) => setinputtupdateTitle(e.target.value)}
                        />
                      </div>
                      <div className="me-3 col-3">
                        <label
                          htmlFor="formGroupExampleInput"
                          className="form-labe fw-bold"
                        >
                          New Descrp :
                        </label>
                        <input
                          required
                          type="text"
                          value={inputtupdateDescrp}
                          className="form-control"
                          placeholder="New Title"
                          onChange={(e) =>
                            setinputttupdateDescrip(e.target.value)
                          }
                        />
                      </div>
                      <button
                        type="button"
                        className="btn btn-danger   px-2"
                        onClick={() => {
                          dispatch(
                            updatepost({
                              id: post.id,
                              Title: inputtupdateTitle,
                              Description: inputtupdateDescrp,
                            })
                          );
                          setinputtupdateTitle("");
                          setinputttupdateDescrip("");
                          setiswork(false);
                        }}
                      >
                        Update
                      </button>
                    </div>
                  </div>
                ) : (
                  " "
                )}
              </div>
            </div>
          ))
        ) : (
          <h1 className="text-center">There Is No Posts</h1>
        )}
      </div>
    </div>
  );
};

export default Posts;
