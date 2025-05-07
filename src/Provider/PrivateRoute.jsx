import React, { use } from 'react'
import { AuthContext_File } from './AuthProvider'
import { Navigate } from 'react-router'

function PrivateRoute({ children }) {

    const { user } = use(AuthContext_File)
    console.log(user)
    if (user && user.email) {
        return children
    }
    else {
        return <Navigate to='/login'></Navigate>
    }
}

export default PrivateRoute
