import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const RequirAuth = ({children}) => {
    const location = useLocation();
    const token = localStorage.getItem('token');
    if(!token){
        return <Navigate to="/signin" state={{ from: location }} replace />;
    }
    return children
};

export default RequirAuth;