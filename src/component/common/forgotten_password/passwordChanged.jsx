import React, { useState } from "react";
import auth from "../../../services/authService";
import RadioSelect from "../radioSelect";

export default function PasswordChanged(props) {
  const { email, pass } = props.history.location.state;
  const [login, setLogin] = useState(1); //login if value is 1
  const [checked, setChecked] = useState({ login: true, logout: false });

  const onChangeRadio = ({ target: input }) => {
    if (input.name === "logout") {
      setChecked({ login: false, logout: true });
      setLogin(0);
    } else {
      setChecked({ login: true, logout: false });
      setLogin(1);
    }
  };

  const submitRequest = async (e) => {
    e.preventDefault();
    if (login === 0) window.location = "/login";
    //move to login page
    else {
      const { data: response, headers } = await auth.login(email, pass);
      //console.log(response);
      // if (!response.success) return;
      auth.saveToken(headers["x-auth-token"]); //save token
      window.location = "/"; //home page
    }
  };

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

        <form onSubmit={submitRequest}>
          <RadioSelect
            label="Log out of other devices"
            name="logout"
            onChange={onChangeRadio}
            checked={checked}
          />
          <RadioSelect
            label="Stay logged in"
            name="login"
            onChange={onChangeRadio}
            checked={checked}
          />
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <button type="submit" className="btn btn-primary">
              Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

// onChange={(e)=> }
// <div className="form-check mb-2">
//   <input
//     className="form-check-input"
//     type="radio"
//     name="flexRadioDefault"
//     id="flexRadioDefault1"
//     value="logout"
//     onChange={(e) => setLogin(0)} //logout
//   />
//   <label className="form-check-label" htmlFor="flexRadioDefault1">
//     Log out of other devices
//   </label>
// </div>

// <div className="form-check">
//   <input
//     className="form-check-input"
//     type="radio"
//     name="flexRadioDefault"
//     id="flexRadioDefault2"
//     value="login"
//     onChange={(e) => setLogin(1)} //login
//     checked="on"
//   />
//   <label className="form-check-label" htmlFor="flexRadioDefault2">
//     Stay logged in
//   </label>
// </div>
//   <div style={{ display: "flex", justifyContent: "flex-end" }}>
//     <button type="submit" className="btn btn-primary">
//       Continue
//     </button>
//   </div>
// </form>
//       </div>
//     </div>
//   );
// }
