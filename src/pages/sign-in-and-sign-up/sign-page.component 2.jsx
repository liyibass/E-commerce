import React from "react";
import "./sign-page.style.scss";
import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";

function SignPage() {
  return (
    <div className="sign-page">
      {/* <h1>HOHOHO</h1> */}
      <SignIn />

      {/* <SignUp /> */}
    </div>
  );
}

export default SignPage;
