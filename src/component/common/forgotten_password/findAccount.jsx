import React, { useState } from "react";

import { routes, httpRequest } from "../../../services/forgottenPassword";

export default function FindAccount(props) {
  const [_email, setEmail] = useState("");
  const [error, setError] = useState("");

  const submitSearch = async () => {
    const route = routes.findAcount;
    if (!_email)
      return setError("Fill in at least one field to search for your account");
    const { data: response } = await httpRequest({
      route,
      data: { email: _email },
    });
    if (!response.success) return setError(response.message);
    const { name, email } = response.message;
    //server code
    // console.log("history1= ", props.location);
    props.history.push({
      pathname: "/reset-password",
      state: { name, email },
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
          autoComplete="off"
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
            onClick={() => props.history.push("/login")}
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
