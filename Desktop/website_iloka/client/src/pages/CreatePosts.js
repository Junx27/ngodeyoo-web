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
    title: Yup.string().required("Masukan Judul Deskripsi"),
    postText: Yup.string().required("Masukan Text"),
    username: Yup.string().min(3).required("Masukan Username"),
  });
  const onSubmit = (data) => {
    axios.post("http://localhost:3001/posts", data).then((response) => {
      console.log("Bekerja");
    });
    navigate("/");
  };
  return (
    <div>
      <h1 className="text-center">Welcome To Create Post</h1>
      <div className="createPostsPage">
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          <Form className="mb-3 container">
            <label for="exampleFormControlInput1" class="form-label">
              Title: <ErrorMessage name="title" component="span" />
            </label>
            <Field
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            />
            <label>
              Text Posts: <ErrorMessage name="postText" component="span" />
            </label>
            <Field
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            />
            <label>
              Username: <ErrorMessage name="username" component="span" />
            </label>
            <Field
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            />
            <button type="submit" class="btn btn-primary mt-3">
              Create Post
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
}

export default CreatePosts;
