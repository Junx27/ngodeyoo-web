import React from 'react'
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
    })
    const onSubmit = (data) => {
        axios.post("http://localhost:3001/post", data).then((response) => {
            console.log("Bekerja")});
            navigate("/");
    };
  return ( 
    <div>
        <h1 class="titleCreatePost">Welcome To Create Post</h1>
        <div className="createPostsPage">
      <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
        <Form className="formContainer">
            <label>Title: <ErrorMessage name="title" component="span"/></label>
            <Field
            class="createTitle"
            autocomplete="off"
            id="inputCreatePosts"
            name="title"
            placeholder=""
            />
            <label>Text Posts: <ErrorMessage name="postText" component="span"/></label>
            <Field
            class="createTextPost"
            autocomplete="off"
            id="inputCreatePosts"
            name="postText"
            placeholder=""
            />
            <label>Username: <ErrorMessage name="username" component="span"/></label>
            <Field
            class="createUsername"
            autocomplete="off"
            id="inputCreatePosts"
            name="username"
            placeholder=""
            />
            <button  type="submit" class="createButton">Create Post</button>
        </Form>
      </Formik>
    </div>
    </div>
    
  );
};

export default CreatePosts;
