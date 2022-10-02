// Import FirebaseAuth and firebase.
import React from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "../firebase/client";
import "firebase/compat/auth";

import "./signin.css";
import aasmaan from "./imgs/aasmaan.svg";

// Configure FirebaseUI.
const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: "popup",
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: "/signedin",
  // We will display Google and Facebook as auth providers.
  signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID, firebase.auth.PhoneAuthProvider.PROVIDER_ID],
};

function SignInScreen() {
  return (
    <>
      <div className="aasmaancontainer">
        <img src={aasmaan}></img>
      </div>
      <div className="containercontainer">
        <div className="authcontainer">
          <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
        </div>
      </div>
    </>
  );
}

export default SignInScreen;
