import React from "react";

export const TableRow = ({ row }) => {

  return (
    <>
     <tr>
      {Object.values(row).map((data, index) => (
       <td key={index}>{data}</td>
      ))}
    </tr>
    </>   
  );
};
