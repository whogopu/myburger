import React, { Component } from "react";
import Button from "../../../components/UI/Button/Button";
import classes from "./ContactData.css";
class ContactData extends Component {
  state = {
    name: "",
    email: "",
    address: {
      street: "",
      postalCode: ""
    }
  };
  render() {
    return (
      <div className={classes.ContactData}>
        <h1>Enter your contact data</h1>
        <form action="">
          <input type="text" name="name" placeholder="your name" />
          <input type="email" name="email" placeholder="your email" />
          <input type="text" name="street" placeholder="Address Street" />
          <input type="text" name="postal" placeholder="Address postal Code" />
          <Button btnType="Success">ORDER NOW</Button>
        </form>
      </div>
    );
  }
}
export default ContactData;
