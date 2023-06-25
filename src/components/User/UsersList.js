import React, { useContext } from "react";

import { Card } from "./UI/Card";
import classes from "../User/UsersList.module.css"
import { AuthContext } from "../context/context";
import  { Navigate } from 'react-router-dom'

const UsersList = (props) => {
  const cnt = useContext(AuthContext);
  console.log(cnt);
  // if(cnt.isLoggedIn === false) {
  //   return <Navigate to='/login'  />
  // }
  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((user, index) => (
          <li key={user.id}>
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
