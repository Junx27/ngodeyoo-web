import React from 'react'
import axios from "axios";
import { useEffect, useState } from 'react';

function Home() {
    const [listOfPost, setListOfPost] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/post").then((response) => {
      setListOfPost(response.data);
    });
  }, []);
  return (
    <div>
        {listOfPost.map((values, key) => {
            return (
            <div className="post" key={values.id}>
                <div className="title"> <h1>{values.title}</h1></div>
                <div className="body"> {values.postText} </div>
                <div className="footer">"Dipublikasikan oleh: {values.username}" </div>
            </div>
        );

      })};
    </div>
  )
}

export default Home
