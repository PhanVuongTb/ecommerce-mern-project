import { Row, Col } from "react-bootstrap";
// import axios from "axios";
import { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import ProductScreen from "./Products/ProductScreen";
import { listProducts } from "../actions/productActions";
import Loader from "./../components/Loader";
import Message from "../components/Message";

const HomePage = () => {
  // const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     const { data } = await axios.get("http://localhost:8080/api/products");
  //     setProducts(data);
  //   };
  //   fetchProducts();
  // }, []);

  const dispatch = useDispatch();

  // const products = useSelector((state) => state.productList.products);

  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row>
          {products.map((product) => (
            <Col key={product._id} md={3}>
              <ProductScreen product={product} />
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};

export default HomePage;
