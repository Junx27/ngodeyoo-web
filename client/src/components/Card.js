/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import sample_image from "../assets/images/sample_images.jpeg";
import { IoIosCloudUpload, IoIosFiling, IoIosListBox } from "react-icons/io";

function Card({ posts }) {
  return (
    <div>
      <div className="row mb-5">
        <div className="col-5 ms-2 border-end">
          <figure className="">
            <img src={sample_image} className="img-thumbnail rounded" />
            <h5 className="orange mt-3">{posts.judul_pekerjaan}</h5>
            <p className="text-muted">Published by {posts.nama_perusahaan}</p>
            <button className="btn bg-orange-btn bg-orange-hover-btn mt-2">
              <IoIosCloudUpload className="icon me-3" />
              Apply
            </button>
          </figure>
        </div>
        <div className="col-6 ms-3">
          <div className="text-start">
            <h5 className="orange">
              <IoIosFiling className="icon me-2" />
              Description
            </h5>
            <hr />
            <>
              Gaji : <span className="font blue">{posts.gaji}</span>
            </>
            <br />
            <br />
            <>
              Tunjangan : <span className="font blue">{posts.tunjangan}</span>
            </>
            <br />
            <br />
            <>
              Quantity :{" "}
              <span className="font blue">{posts.quantity} Orang</span>
            </>
            <br />
            <br />
            <h5 className="orange">
              <IoIosListBox className="icon me-2" />
              Persyaratan :{" "}
            </h5>
            <hr />
            <>
              Jenis Kelamin :{" "}
              <span className="font blue">{posts.jenis_kelamin}</span>
            </>
            <br />
            <br />
            <>
              Usia : <span className="font blue">{posts.usia}</span>
            </>
            <br />
            <br />
            <>
              Lulusan : <span className="font blue">{posts.lulusan}</span>
            </>
            <br />
            <br />
            <>
              Skill : <span className="font blue">{posts.skill}</span>
            </>
            <br />
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
