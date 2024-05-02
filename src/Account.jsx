// Account.js

import React from "react";
import "./App.css";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/clerk-react";

const Account = () => {
  return (
    <div
      style={{
        cursor: "pointer",
        border: "3px solid #0a65fc",
        borderRadius: "50%",
        justifyContent: "center",
        alignItems: "center",
        padding: "10px",
        backgroundColor: "#3841792a",
      }}
    >
      <SignedOut>
        <SignInButton className="login_btn" />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </div>
  );
};

export default Account;
