import React from "react";

export const TableHeadItem = ({ headerData }) => {
  return (
    <thead>
      <tr key="Header">
        {headerData.map((header, index) => (
          <th key={index}>{header}</th>
        ))}
      </tr>
    </thead>
  );
};
