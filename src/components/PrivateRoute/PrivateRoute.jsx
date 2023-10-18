import React, { useContext } from 'react'
import { UserContext } from '../../firebase/AuthProvider'
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(UserContext);

    if (loading) {
        return <div className='flex justify-center my-20'>
            <h3 className='text-2xl font-bold'>Gathering resources.....</h3>
        </div>
    }

    if (user) {
        return children
    }

    return <Navigate to="/login"></Navigate>



}

export default PrivateRoute