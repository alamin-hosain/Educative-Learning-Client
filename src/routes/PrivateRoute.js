import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import { AuthContext } from '../contexts/ContextProvider';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin mx-auto dark:border-green-700"></div>
    }

    if (!user?.emailVerified) {
        return <Navigate to='/login' state={{ from: location }} replace />
    }


    return children;
};

export default PrivateRoute;