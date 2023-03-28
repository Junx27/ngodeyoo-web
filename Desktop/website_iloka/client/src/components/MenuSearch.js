import React from "react";
import Carousel from "react-bootstrap/Carousel";
import img1 from "../assets/images/profil.jpg";
import img2 from "../assets/images/profil2.jpg";
import img3 from "../assets/images/profil3.jpg";
import { useState } from "react";

function MenuSearch() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div className="container">
      <hr />
      <div className="container">
        <div className="container p-5">
          <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
              <img
                className="d-block w-100 rounded"
                src={img1}
                alt="First slide"
              />
              <Carousel.Caption className="bg-secondary px-5 rounded">
                <h1>
                  Temukan Pekerjaanmu{" "}
                  <span className="text-warning">Sekarang</span>
                </h1>
                <hr className="text-warning" />
                <h5>Mulailah berkarir bersama ILOKA</h5>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Aliquid quod voluptas nisi laudantium rerum qui maxime
                  molestiae velit nulla iste praesentium sint aliquam ex autem,
                  veniam aperiam repellendus quam perferendis?
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 rounded"
                src={img2}
                alt="Second slide"
              />
              <Carousel.Caption className="bg-secondary px-5 rounded">
                <h1>
                  Kenapa Harus <span className="text-warning">ILOKA</span>
                </h1>
                <hr className="text-warning" />
                <h5>Menyediakan lowongan kerja real-time</h5>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Aliquid quod voluptas nisi laudantium rerum qui maxime
                  molestiae velit nulla iste praesentium sint aliquam ex autem,
                  veniam aperiam repellendus quam perferendis?
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 rounded"
                src={img3}
                alt="Third slide"
              />
              <Carousel.Caption className="bg-secondary px-5 rounded">
                <h1>
                  <span className="text-warning">Ambil Kesempatanmu</span>, Raih
                  Impianmu
                </h1>
                <hr className="text-warning" />
                <h5>bersama ILOKA pasti semua bisa</h5>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Aliquid quod voluptas nisi laudantium rerum qui maxime
                  molestiae velit nulla iste praesentium sint aliquam ex autem,
                  veniam aperiam repellendus quam perferendis?
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default MenuSearch;
