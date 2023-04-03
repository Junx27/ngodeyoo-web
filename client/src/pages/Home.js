import React from "react";
import { useEffect, useState } from "react";
import Pagination from "../components/Pagination";
import MenuSearch from "../components/MenuSearch";
import Information from "../components/Information";

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/posts").then((response) =>
      response.json().then((data) => setData(data))
    );
  });
  return (
    <div>
      <MenuSearch />
      <Pagination data={data} />
      <div className="container">
        <hr />
        <Information />
      </div>
      <hr />
    </div>
  );
}

export default Home;
