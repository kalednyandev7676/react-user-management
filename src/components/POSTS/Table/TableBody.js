import React from "react";

export const TableBody = ({ bodyData }) => {

  if (bodyData.length === 0) {
    return (
      <tbody>
        <tr key={bodyData.length}>         
          <td colSpan="5"> No Record found </td>
        </tr>
      </tbody>
    );
  }

  return (
    <tbody>
      {bodyData.map((post, index) => (
        // console.log(post)
        <tr key={post.id}>
          <td>{post.id}</td>
          <td>{post.title}</td>
          <td>{post.userId}</td>
          <td>{post.body}</td>
          <td>
            <button>Edit</button>
            <button>View</button>
            <button>Delete</button>
          </td>
        </tr>
        
      ))}
    </tbody>
  );
};
