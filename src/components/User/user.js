import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/context";
import Login from "../Login/Login";
import { AddUser } from "./AddUser";
import UsersList from "./UsersList";

const Users = () => {
  const authCtx = useContext(AuthContext);
  const [userList, setUserList] = useState([]);
  const isLogin = localStorage.getItem("isLoggedIn");

  useEffect(() => {
    document.title = `Users`;
  });

  console.log("local storage >> ctx ", isLogin, authCtx.isLoggedIn);
  const onAddUserHandler = (uName, uAge) => {
    // console.log(uName, uAge);
    setUserList((prevUserList) => {
      return [
        ...prevUserList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };
  return (
    <>
      {!authCtx.isLoggedIn && <Login />}
      <AddUser onAddUser={onAddUserHandler} />
      <UsersList users={userList} />
    </>
  );
};

export default Users;
