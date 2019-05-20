import React, { Component } from "react";
import Joi from "joi-browser";
import Input from "./input";
import Select from "./select";

class Form extends Component {
  state = {
    data: {},
    errors: {}
  };

  validate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(this.state.data, this.schema, options);

    if (!error) return null;
    const errors = {};

    error.details.map(err => {
      return (errors[err.path[0]] = err.message);
    });

    return errors;
  };

  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  };

  handleSubmit = e => {
    e.preventDefault();

    const errors = this.validate();

    this.setState({ errors: errors || {} });
    if (errors) {
      return;
    }

    this.doSubmit();
  };

  handleChange = ({ currentTarget: input }) => {
    const { data, errors } = this.state;
    data[input.name] = input.value;

    errors[input.name] = this.validateProperty(input);
    this.setState({ data, errors: errors });
  };

  renderInput = (name, label, type = "text") => {
    const { data, errors } = this.state;

    return (
      <Input
        type={type}
        value={data[name]}
        onChange={this.handleChange}
        label={label}
        name={name}
        error={errors[name]}
      />
    );
  };

  renderSelect = (name, label, options) => {
    const { data, errors } = this.state;
    return (
      <Select
        name={name}
        label={label}
        options={options}
        selectedOption={data[name]}
        onChange={this.handleChange}
        error={errors[name]}
      />
    );
  };

  renderButton = label => {
    return (
      <button disabled={this.validate()} className="btn btn-primary">
        {label}
      </button>
    );
  };
}

export default Form;
