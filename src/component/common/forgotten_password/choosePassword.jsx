import React from "react";

export default function ChoosePassword() {
  return (
    <div className="p-2 formContainer">
      <div>
        <h3>Choose a new password</h3>
        <hr />
        <p>
          Create a new password that is at least 6 characters long. A strong
          password has a combination of letters, digits and punctuation marks.
        </p>
        <input
          type="text"
          className="form-control"
          style={{ color: "rgba(0,0,0,0.5)" }}
          placeholder="New password"
          id="pass"
          name="pass"
          color="red"
        />
        {true && (
          <div className="mt-3" style={{ color: "rgba(0,0,0,0.6)" }}>
            <p>
              Password strength:{" "}
              <strong className="text-primary">Medium</strong>
            </p>
          </div>
        )}
        <hr />
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <button
            style={{ backgroundColor: "rgba(200,230,230,0.5)" }}
            className="btn mr-3"
          >
            Skip
          </button>
          <button className="btn btn-primary">Continue</button>
        </div>
      </div>
    </div>
  );
}
