import React from "react";
import { TableBody } from "./TableBody";
import { TableHeadItem } from "./TableHeadItem";
import { TableRow } from "./TableRow";


export const PostsTable = ({ Data, Header }) => {
  // console.log(Posts);
  return (
    <table className="table table-striped">
      <TableHeadItem headerData={Header} />

 
        <TableBody bodyData={Data} />
        {/* {Data.map( row => (  <TableRow row={row} /> ))} */}

        {/* {Posts.map((post) => (
          <tr>
            <td>{post.id}</td>
            <td>{post.name}</td>
            <td>{post.email}</td>
            <td>{post.body}</td>
            <td>
              <button>Edit</button>
              <button>View</button>
              <button>Delete</button>
            </td>
          </tr>
        ))} */}
 
    </table>
  );
};
