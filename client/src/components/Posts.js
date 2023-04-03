import React from "react";
import CardMenu from "../components/CardMenu";
import { Col, Row, Container } from "react-bootstrap";

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <Container>
        <Row>
          {/* <ListCategoris/> */}
          <Col>
            <Row>
              {posts.map((posts) => (
                <CardMenu key={posts.id} menu={posts} />
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Posts;
