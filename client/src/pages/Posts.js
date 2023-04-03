import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Posts() {
  let { id } = useParams();
  const [postObject, setPostObject] = useState({});
  useEffect(() => {
    axios.get(`http://localhost:3001/posts/byId/${id}`).then((response) => {
      setPostObject(response.data);
    });
  });

  return (
    <div>
      <div>
        <div className="title">
          {" "}
          <h1>{postObject.title}</h1>
        </div>
        <div className="body">
          {" "}
          "Dipublikasikan oleh: {postObject.username}{" "}
        </div>
        <div className="footer">{postObject.postText}" </div>
      </div>
    </div>
  );
}

export default Posts;
