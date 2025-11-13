import React, {useContext} from "react";
import {AuthContext} from "../provider/AuthProvider";
import {Navigate, useLocation} from "react-router-dom";
import Loading from "../pages/Loading";

const PrivateRoute = ({children}) => {
	const {user, loading} = useContext(AuthContext);
    const location = useLocation();


    if(loading) {
        return <Loading></Loading>
    }

	if (user && user.email) {
		return children;
	}

	return <Navigate state={location.pathname} to={"/auth/login"}></Navigate>; 
    // basically login component e ei location ta ke pahtay, dilam.
    // kon location? eije ei login component'r age user jekhane chilo shei location
};

export default PrivateRoute;
