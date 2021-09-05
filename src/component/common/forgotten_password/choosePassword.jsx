import React, { useState } from "react";
import Joi, { validate } from "joi-browser";
import { routes, httpRequest } from "../../../services/forgottenPassword";

export default function ChoosePassword(props) {
  const { email } = props.history.location.state;
  const [pass, setPass] = useState("");
  const [errors, setErrors] = useState("");

  const submitNewPassword = async () => {
    const route = routes.updatePassword;
    const { data: response } = await httpRequest({
      route,
      data: {
        password: pass,
        email,
      },
    });
    if (!response.success) return;
    //successfully updated password
    props.history.push({
      pathname: "/password-changed",
      state: { email, pass },
    });
  };

  const validatePassword = ({ target: input }) => {
    const password = input.value;
    setPass(password);
    const schema = {
      password: Joi.string()
        .required()
        .min(6)
        .label("Password")
        .regex(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,1024}$/),
    };
    const { error } = Joi.validate({ password }, schema);
    if (!error) return setErrors("");
    setErrors(error.details[0].message);
  };

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
          value={pass}
          autoComplete="off"
          onChange={validatePassword}
        />
        {errors && (
          <div className="mt-3" style={{ color: "rgba(0,0,0,0.6)" }}>
            <p>{errors}</p>
            {/* <p>
              Password strength:{" "}
              <strong className="text-primary">Medium</strong>
            </p> */}
          </div>
        )}
        <hr />
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <button
            onClick={() => (window.location = "/login")}
            style={{ backgroundColor: "rgba(200,230,230,0.5)" }}
            className="btn me-3"
          >
            Skip
          </button>
          <button
            className="btn btn-primary"
            disabled={errors}
            onClick={submitNewPassword}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
