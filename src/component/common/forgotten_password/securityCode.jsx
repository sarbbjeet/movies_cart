import { routes, httpRequest } from "../../../services/forgottenPassword";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";

export default function SecurityCode(props) {
  const [code, setCode] = useState("");
  const [errors, setErrors] = useState("");
  const { email } = props.history.location.state;

  const resendOTP = async () => {
    const route = routes.resetPassword;
    const { data: response } = await httpRequest({ route, data: { email } });
    if (!response.success) return toast.error("error to send otp");
    return toast.info(`Resent OTP to: ${email}`);
  };

  const verifySecretCode = async () => {
    const route = routes.verifyCode;
    const { data: response } = await httpRequest({
      route,
      data: { email, code },
    });

    // console.log("response=", response);
    if (!response.success) return setErrors(response.message);
    //entered security code is correct
    //move to choose-password route with props email
    props.history.push({ pathname: "/choose-password", state: { email } });

    //server code
    setCode("");
    setErrors("");
  };
  return (
    <div className="formContainer">
      <div>
        <h3>Enter security code</h3>
        <hr />
        {errors && (
          <div
            className="p-1"
            style={{
              backgroundColor: "rgba(255,0,0,0.3)",
              width: "100%",
              border: "1px solid red",
            }}
          >
            <p>
              The number that you've entered doesn't match your code. Please try
              again.
            </p>
          </div>
        )}
        <h6>
          Please check your emails for a message with your code. Your code is 6
          numbers long.
        </h6>
        <div style={{ width: "90%", display: "flex" }}>
          <input
            style={{ width: "40%" }}
            className="mr-2 form-control"
            type="text"
            autoComplete="off"
            name="code"
            id="code"
            placeholder="Enter code"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
          <p>
            we sent your code to: <br /> {email}
          </p>
        </div>

        <hr />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <NavLink
            to={{ pathname: props.history.location.pathname, state: { email } }}
            onClick={resendOTP}
          >
            Didn't get a code?
          </NavLink>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <button
              onClick={() => props.history.push("/find-account")}
              style={{ backgroundColor: "rgba(200,230,230,0.5)" }}
              className="btn mr-3"
            >
              Cancel
            </button>
            <button onClick={verifySecretCode} className="btn btn-primary">
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
