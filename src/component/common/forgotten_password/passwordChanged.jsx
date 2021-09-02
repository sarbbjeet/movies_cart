import React from "react";

export default function PasswordChanged() {
  return (
    <div className="p-2 formContainer">
      <div>
        <h3>Password Changed</h3>
        <hr />
        <p>
          If you think someone else may have known your old password, it's a
          good idea to log out of any other phones and computers and check for
          recent changes to your account.
        </p>

        <div className="form-check mb-2">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
          />
          <label className="form-check-label" for="flexRadioDefault1">
            Log out of other devices
          </label>
        </div>

        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
          />
          <label className="form-check-label" for="flexRadioDefault1">
            Stay logged in
          </label>
        </div>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <button className="btn btn-primary">Continue</button>
        </div>
      </div>
    </div>
  );
}
