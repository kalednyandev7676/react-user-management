import React, { useState } from "react"
import MaxHomePage from "./MAX/MaxHomePage";
import PostLists from "./POSTS/PostLists";


export const NavigateButton = () => {
    
    const [isMax, setMax] = useState(false);
    const [isPost, setPost] = useState(true);
    const onMaxHandler = () => {
      setMax(true);
    //   setPost(false);
    };
     const onPostHandler = () => {
      setPost(true);
    //   setMax(false);
    };

   return (
   <div>
     {!isMax && <button onClick={onMaxHandler}> Goto MAX Page</button>}
    {isMax && <MaxHomePage />}

    {!isPost && <button onClick={onPostHandler}> Goto Posts Home page</button>}
    {isPost && <PostLists />}
   </div>
   )
}