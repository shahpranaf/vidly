import React from "react";
import Input from "./input";

const SearchBox = props => {
  const { searchQuery, onSearch } = props;
  return (
    <Input
      type="text"
      value={searchQuery}
      onChange={e => onSearch(e.currentTarget.value)}
      placeHolder="Search.."
      name="search"
      className="form-control my-3"
      // error={errors[name]}
    />
  );
};

export default SearchBox;
