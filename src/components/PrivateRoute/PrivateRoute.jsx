import React, { useContext } from 'react'
import { UserContext } from '../../firebase/AuthProvider'
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const location = useLocation();

    const { user, loading } = useContext(UserContext);

    if (loading) {
        return <div className='flex justify-center my-20'>
            <h3 className='text-2xl font-bold text-gray-500'>Gathering resources.....</h3>
        </div>
    }

    if (user) {
        return children
    }

    return <Navigate state={location.pathname} to="/login"></Navigate>



}

export default PrivateRoute