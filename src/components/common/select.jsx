import React from "react";

const Select = ({ name, label, options, selectedOption, error, ...rest }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <select
        name={name}
        {...rest}
        value={selectedOption}
        className="form-control"
        id={name}
      >
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.title}
          </option>
        ))}
      </select>
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Select;
