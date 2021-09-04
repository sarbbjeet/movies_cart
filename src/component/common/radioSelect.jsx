import React from "react";

export default function RadioSelect(props) {
  const { name, onChange, label, checked } = props;
  return (
    <div className="form-check mb-2">
      <input
        className="form-check-input"
        type="radio"
        name={name}
        id={name}
        value={name}
        onChange={onChange}
        checked={checked[name]}
      />
      <label className="form-check-label" htmlFor={name}>
        {label}
      </label>
    </div>
  );
}
