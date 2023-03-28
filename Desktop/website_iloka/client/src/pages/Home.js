import React, { Component } from "react";
import axios from "axios";
import { Col, Row, Container } from "react-bootstrap";
import CardMenu from "../components/CardMenu";
import MenuSearch from "../components/MenuSearch";

export default class About extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menu: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:3001/posts")
      .then((res) => {
        const menu = res.data;
        this.setState({ menu });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const { menu } = this.state;
    return (
      <div className="app">
        <MenuSearch />
        {/* <NavbarComponent /> */}
        <div className="mt-3">
          <Container>
            <Row>
              {/* <ListCategoris/> */}
              <Col>
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
                <Row>
                  {menu &&
                    menu.map((menu) => <CardMenu key={menu.id} menu={menu} />)}
                  ;
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}
