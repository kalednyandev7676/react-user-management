import React, { useContext } from 'react';
import { AuthContext } from '../context/context';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Logout = (props) => {
	const navigate = useNavigate();
	const authCtx = useContext(AuthContext);
	localStorage.removeItem("token");

	const logoutHandler = (event) => {
		event.preventDefault();
		authCtx.logoutHandler();
		console.log(authCtx);
		navigate('/');
	  };

return (
	<div
	style={{
		display: 'flex',
		justifyContent: 'Center',
		alignItems: 'Right',
		height: '100vh'
	}}
	>
	
      <h1>You have been logout</h1>
      <button>
        <Link to="/">Login again</Link>
      </button>
    </div>
);
};

export default Logout;
