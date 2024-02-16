import React, { useState } from "react";
import {
  Row,
  Col,
  ListGroup,
  Button,
  Image,
  ListGroupItem,
  Form,
} from "react-bootstrap";
import Rating from "../../components/Rating";
import { Link, useNavigate, useParams } from "react-router-dom";

const products = [
  {
    _id: "1",
    name: "boAt Airdopes 121v2 TWS Earbuds",
    image: "../../../src/assets/images/boatHeadfone.jpg",
    description:
      "boAt Airdopes 121v2 TWS Earbuds with Bluetooth V5.0, Immersive Audio, Up to 14H Total Playback, Instant Voice Assistant, Easy Access Controls with Mic and Dual Tone Ergonomic Design(Active Black) ",
    brand: "Boat",
    category: "Electronics",
    price: 20.99,
    countInStock: 10,
    rating: 4.5,
    numReviews: 12,
  },
  {
    _id: "2",
    name: "Micromax IN 1b (Purple, 32 GB)",
    image: "../../../src/assets/images/micromaxInB.jpg",
    description:
      "Say hello to the Micromax IN 1b smartphone whose powerful MediaTek Helio G35 gaming processor and a 5000 mAh battery will pave the way for effortless multitasking and usage.",
    brand: "Micromax",
    category: "Electronics",
    price: 599.99,
    countInStock: 7,
    rating: 4.0,
    numReviews: 8,
  },
  {
    _id: "3",
    name: "Cannon EOS 80D DSLR Camera",
    image: "../../../src/assets/images/camera.jpg",
    description:
      "Characterized by versatile imaging specs, the Canon EOS 80D further clarifies itself using a pair of robust focusing systems and an intuitive design",
    brand: "Cannon",
    category: "Electronics",
    price: 929.99,
    countInStock: 5,
    rating: 3,
    numReviews: 12,
  },
  {
    _id: "4",
    name: "Sony Playstation 4 Pro White Version",
    image: "../../../src/assets/images/playstation.jpg",
    description:
      "The ultimate home entertainment center starts with PlayStation. Whether you are into gaming, HD movies, television, music",
    brand: "Sony",
    category: "Electronics",
    price: 399.99,
    countInStock: 11,
    rating: 5,
    numReviews: 12,
  },
  {
    _id: "5",
    name: "Logitech G-Series Gaming Mouse",
    image: "../../../src/assets/images/mouse.jpg",
    description:
      "Get a better handle on your games with this Logitech LIGHTSYNC gaming mouse. The six programmable buttons allow customization for a smooth playing experience",
    brand: "Logitech",
    category: "Electronics",
    price: 49.99,
    countInStock: 7,
    rating: 3.5,
    numReviews: 10,
  },
  {
    _id: "6",
    name: "Amazon Echo Dot 3rd Generation",
    image: "../../../src/assets/images/alexa.jpg",
    description:
      "Meet Echo Dot - Our most popular smart speaker with a fabric design. It is our most compact smart speaker that fits perfectly into small space",
    brand: "Amazon",
    category: "Electronics",
    price: 29.99,
    countInStock: 0,
    rating: 4,
    numReviews: 12,
  },
];

const ProductDetails = () => {
  const [qty, setQty] = useState(1);
  const history = useNavigate();
  const { id } = useParams();
  const product = products.find((prod) => prod._id === id);

  const addToCartHandler = () => {
    history.push(`/cart/${id}?qty=${qty}`);
  };
  return (
    <>
      <Link to="/" className="btn btn-light">
        <i className="fas fa-arrow-left    "></i>
        &nbsp; GO BACK
      </Link>

      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroupItem>
              <h3>{product.name}</h3>
            </ListGroupItem>
            <ListGroupItem>
              <Rating
                value={product.rating}
                text={`${product.numReviews} Reviews`}
              />
            </ListGroupItem>
            <ListGroupItem>Price : ${product.price}</ListGroupItem>
            <ListGroupItem>{product.description}</ListGroupItem>
          </ListGroup>
        </Col>
        <Col md={3}>
          <ListGroupItem>
            <Row>
              <Col>Status :</Col>
              <Col>
                {product.countInStock > 0 ? "In Stock " : "out of stock"}
              </Col>
            </Row>
          </ListGroupItem>
          {product.countInStock > 0 && (
            <ListGroupItem>
              <Row>
                <Col>Qty :</Col>
                <Form.Control
                  as="select"
                  value={qty}
                  onChange={(e) => setQty(e.target.value)}
                >
                  {[...Array(product.countInStock).keys()].map((x) => (
                    <option key={x + 1} value={x + 1}>
                      {x + 1}
                    </option>
                  ))}
                </Form.Control>
              </Row>
            </ListGroupItem>
          )}
          <ListGroupItem>
            <Button
              className="btn-block"
              type="button"
              onClick={addToCartHandler}
            >
              Add to cart
            </Button>
          </ListGroupItem>
        </Col>
      </Row>
    </>
  );
};

export default ProductDetails;
