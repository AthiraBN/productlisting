import React, { useEffect, useState } from "react";
import logo from './logo.svg';
import './App.css';
import { Row, Col } from "react-bootstrap";
import CategoryList from "./components/CategoryList";
import ProductListing from "./components/ProductListing";
import { getCart } from "./store/actions/cartActions";
import { connect } from "react-redux";

function App(props) {

  const [cartTotalNum, setCartTotalNum] = useState(0);

 /* useEffect(() => {
    props.getCart();
  }, [props.cart]); */

  const cart = props.cart;
  console.log(cart);
  
  return (
    <div className="App">
      <header className="mb-3 p-4 shadow bg-light float-start w-100 position-relative">
        <div className="headerCart">
        <img className="w-100" src='cart.png'/>
        <span className="cartCount">{cartTotalNum}</span>
        </div>
        
      </header>
      <div className="container-fluid p-4">
      <Row>
        <Col md={3}>
          <CategoryList />
        </Col>
        <Col md={9}>
          <ProductListing />
        </Col>
      </Row></div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
      cart: state.cartReducer.cart
  };
};


export default connect(mapStateToProps, { getCart })(App);
