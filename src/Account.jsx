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
