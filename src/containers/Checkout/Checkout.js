import React, { Component } from "react";
import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
import ContactData from "./ContactData/ContactData";
import { Route } from "react-router-dom";
class Checkout extends Component {
  state = {
    ingredients: {}
  };

  componentDidMount() {
    const ingredients = {};
    const query = new URLSearchParams(this.props.location.search);
    for (let param of query.entries()) {
      ingredients[param[0]] = +param[1];
    }

    this.setState({ ingredients: ingredients });
  }
  checkoutContinuedHandler = () => {
    // alert("fill the form");
    this.props.history.replace('/checkout/contact-data')
  };

  checkoutCancelledHandler = () => {
    this.props.history.goBack();
  };

  render() {
    return (
      <div>
        <CheckoutSummary
          ingredients={this.state.ingredients}
          checkoutCancelled={this.checkoutCancelledHandler}
          checkoutContinued={this.checkoutContinuedHandler}
        />
      <Route path="/checkout/contact-data" component={ContactData} />

      </div>
    );
  }
}
export default Checkout;
