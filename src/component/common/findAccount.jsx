import React, { useState } from "react";
import { Redirect } from "react-router-dom";

import { forgottenPassword as fp } from "../../services/forgottenPasswordService";

export default function FindAccount(props) {
  const [_email, setEmail] = useState("");
  const [error, setError] = useState("");

  const submitSearch = async () => {
    if (!_email)
      return setError("Fill in at least one field to search for your account");
    const { data: response } = await fp.findAccount(_email);
    if (!response.success) return setError(response.message);
    const { name, email, _id } = response.message;
    //server code
    // console.log("history1= ", props.location);
    props.history.push({
      pathname: "/reset-password",
      state: { name, email, _id },
    });
    setEmail("");
    setError("");
  };

  return (
    <div className="p-2 formContainer">
      <div className="p-2">
        <h3>Find Your Account</h3>
        <hr />
        {error && (
          <div
            className="p-1"
            style={{
              backgroundColor: "rgba(255,0,0,0.3)",
              width: "100%",
              border: "1px solid red",
            }}
          >
            <h6>Please identify this account another way</h6>
            <p>{error}</p>
          </div>
        )}
        <p>Please enter your email address to search for your account.</p>
        <input
          className="form-control"
          type="email"
          name="email"
          id="email"
          value={_email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <hr />
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <button
            style={{ backgroundColor: "rgba(200,230,230,0.5)" }}
            className="btn mr-3"
          >
            Cancel
          </button>
          <button onClick={submitSearch} className="btn btn-primary">
            Search
          </button>
        </div>
      </div>
    </div>
  );
}
