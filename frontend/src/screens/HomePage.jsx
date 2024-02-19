import { Row, Col } from "react-bootstrap";
import axios from "axios";
import ProductScreen from "./Products/ProductScreen";
import { useState, useEffect } from "react";

const HomePage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get("http://localhost:8080/products");
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <>
      <Row>
        {products.map((product) => {
          return (
            <Col key={product._id} md={3}>
              <ProductScreen product={product} />{" "}
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default HomePage;
