import React, { Component } from "react";
import "./sign-up.style.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

export class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }
  handleSubmit = async (event) => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }

    try {
      // use email and password to create user
      // if succeed,it will return a userAuth
      const createUserResult = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      const userAuth = createUserResult.user;
      console.log("userAuth from createUser");
      await createUserProfileDocument(userAuth, { displayName });

      // clean up form
      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-up">
        <h2 className="title">I do not have an account</h2>
        <span>Sign up with your email and password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="display-name"
            name="displayName"
            value={this.state.displayName}
            handleChange={this.handleChange}
            label="display name"
          />
          <FormInput
            type="email"
            name="email"
            value={this.state.email}
            handleChange={this.handleChange}
            label="email"
          />

          <FormInput
            type="password"
            name="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="password"
          />

          <FormInput
            type="password"
            name="confirmPassword"
            value={this.state.confirmPassword}
            handleChange={this.handleChange}
            label="confirm password"
          />

          <CustomButton type="submit">Sign up</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;

// Display Name-Email-Password-Confirm Password
