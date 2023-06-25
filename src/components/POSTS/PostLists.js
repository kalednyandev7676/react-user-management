import axios from "axios";
import React, { useEffect, useState } from "react";
import PostFilter from "./PostFilter";
import { PostsTable } from "./Table/PostsTable";

const tblheading = ["ID", "Title", "UserId", "Body", "Action"];

const PostLists = () => {
  const [posts, setPost] = useState([]);
  const [uniqueUserId, setUniqueUserId] = useState([]);
  const [userId, setUserId] = useState("");

  let BASE_URL = "https://jsonplaceholder.typicode.com/";
  if (userId) {
    BASE_URL += `users/${userId}/posts`;
  } else {
    BASE_URL += "posts";
  }

  const onFilterChangehandler = (userId) => {
    setUserId(userId);
  };

  React.useEffect(() => {
    axios.get(BASE_URL).then((response) => {
      setPost(response.data);
    });
  }, [userId]);

  React.useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      // console.log(response.data);
      const uniqueUserId = response.data.map(({ id }) => id);
      setUniqueUserId(uniqueUserId);
    });
  }, []);

  return (
    <>
      <PostFilter
        userId={uniqueUserId}
        onFilterChange={onFilterChangehandler}
      />
      <PostsTable Data={posts} Header={tblheading} />
    </>
  );
};

export default PostLists;
