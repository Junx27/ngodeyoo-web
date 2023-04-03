import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { Col, Row, Container } from "react-bootstrap";
import CardMenu from "./CardMenu";

export default function Pagination(props) {
  const { data } = props;
  const [currentItems, setCurrentItems] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 3;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(data.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(data.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, data]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <div className="mt-3">
        <Container>
          <Row>
            {/* <ListCategoris/> */}
            <Col>
              <Row>
                {currentItems &&
                  currentItems.map((menu) => (
                    <CardMenu key={menu.id} menu={menu} />
                  ))}
                <hr />
              </Row>
            </Col>
          </Row>
        </Container>
      </div>

      <ReactPaginate
        breakLabel="..."
        nextLabel="Next"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="Previous"
        containerClassName={"pagination justify-content-center"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextClassName={"page-item"}
        nextLinkClassName={"page-link"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        activeClassName={"active"}
      />
    </>
  );
}
