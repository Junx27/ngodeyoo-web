import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CreatePosts() {
  let navigate = useNavigate();
  const initialValues = {
    title: "",
    postText: "",
    username: "",
  };
  const validationSchema = Yup.object().shape({
    title: Yup.string().required("*Masukan Judul Deskripsi"),
    postText: Yup.string().required("*Masukan Text"),
    username: Yup.string().min(3).required("*Masukan Username"),
  });
  const onSubmit = (data) => {
    axios.post("http://localhost:3001/posts", data).then((response) => {
      console.log("Bekerja");
    });
    navigate("/");
  };
  return (
    <div className="container">
      <h1 className="text-center mb-5">Welcome To Create Post</h1>
      <div className="border border-primary  rounded p-5 mt-5">
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          <Form>
            <label for="inputCreatePosts" className="form-label">
              Title:
            </label>
            <br />
            <ErrorMessage
              className="text-danger"
              name="title"
              component="span"
            />
            <Field
              className="form-control mt-3"
              autocomplete="off"
              id="inputCreatePosts"
              name="title"
              placeholder=""
            />
            <label for="inputCreatePosts" className="form-label mt-3">
              Text Posts:
            </label>
            <br />
            <ErrorMessage
              className="text-danger"
              name="postText"
              component="span"
            />
            <Field
              className="form-control mt-3"
              autocomplete="off"
              id="inputCreatePosts"
              name="postText"
              placeholder=""
            />
            <label for="inputCreatePosts" className="form-label mt-3">
              Username:
            </label>
            <br />
            <ErrorMessage
              className="text-danger"
              name="username"
              component="span"
            />
            <Field
              className="form-control mt-3"
              autocomplete="off"
              id="inputCreatePosts"
              name="username"
              placeholder=""
            />
            <button type="submit" className="btn btn-primary mt-5">
              Create Post
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
}

export default CreatePosts;
