import React from "react";

const Input = ({ name, label, value, onChange, error, placeHolder }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        type="text"
        className="form-control"
        placeholder={placeHolder || ""}
      />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;
