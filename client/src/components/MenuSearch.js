import React from "react";

function MenuSearch() {
  return (
    <div className="container">
      <h3>Daftar Pekerjaan</h3>
      <div className="ms-3 pt-2 d-flex flex-row justify-content-start align-items-center">
        <div className="badge text-bg-dark ms-2">Popular Job</div>
        <div className="badge text-bg-light border border-dark ms-2">
          Nearby Job
        </div>
        <div className="badge text-bg-light border border-dark ms-2">
          New Post Job
        </div>
        <div className="badge text-bg-light border border-dark ms-2">
          Update Job
        </div>
        <div className="badge text-bg-light border border-dark ms-2">
          Closed Job
        </div>
        <div className="badge text-bg-light border border-dark ms-2">
          Other Job
        </div>
        <div className="ms-auto position-relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-search"
            viewBox="0 0 16 16"
            className="position-realtive float-end start-100 mt-1 me-3"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
          <input
            className="rounded-pill me-3 px-2"
            type="text"
            placeholder="Search"
          />
        </div>
      </div>
      <hr />
    </div>
  );
}

export default MenuSearch;
