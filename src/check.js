import React, { useEffect, useState } from "react";
import axios from "axios";
import { Col, Container, Image, Row, Button } from "react-bootstrap";
import Design from "../assets/Design.jpg";
import { quatesData } from "./quoteData";

const GalleryPage = () => {
  const [image, setImage] = useState([]);
  const [quateData, setQuateData] = useState("");
  const [page, setPage] = useState(1);
  const [limit, setsetLimit] = useState(6);
  const handlClick = () => {
    setPage(page + 1);
  };
  useEffect(() => {
    let imageArr = [];
    axios
      .get("https://picsum.photos/v2/list", {
        params: { page: page, limit: limit },
      })
      .then((res) => {
        console.log(res);
        res.data.map((element, index) => {
          imageArr.push(element.download_url);
          setQuateData(quatesData.quoteText);
        });
        setImage(imageArr);
      })
      .catch((err) => {
        console.log(22222, err);
      });
  }, [page]);

  return (
    <div className="mainContainer">
      <Container>
        <Row>
          {image?.map((item, index) => (
            <Col sm={4} className="customiseColoum">
              <div className="imageBox">
                <Image src={item} />
                <div class="overlay">{quateData}</div>
              </div>
            </Col>
          ))}
          <Col lg={12}>
            <hr className="divider" />
            <Button className="generateBtn" onClick={() => handlClick()}>
              Generate
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default GalleryPage;
