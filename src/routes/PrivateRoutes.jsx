import React from 'react'
import {useAuthContext} from '../contexts/AuthContext'
import {Navigate, Outlet} from 'react-router-dom'
const PrivateRoutes = () => {

const {token} = useAuthContext();
  console.log(token);
  return (
    token ? <Outlet/> : <Navigate to="/login" />
  )
}

export default PrivateRoutes