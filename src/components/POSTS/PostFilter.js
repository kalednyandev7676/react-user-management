import React from "react";

const PostFilter = ({ userId, onFilterChange }) => {

    const onFilterSelect = (event) => {
        const selectedValue = event.target.value;
        onFilterChange(selectedValue)
    }

  return (
    <div
      className={"text-end"}
      style={{ padding: "10px 100px 10px 100px", width: "80rem" }}
    >
      <label className={"d-inline-flex p-2"}>Filter: </label>
      <select className={"dropdown ml-auto"} onChange={onFilterSelect}>
        {userId.map((id, index) => (
          <option key={index}>{id}</option>
        ))}
      </select>
    </div>
  );
};

export default PostFilter;
