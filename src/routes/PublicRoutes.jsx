import React from 'react'
import {useAuthContext} from '../contexts/AuthContext'
import {Navigate, Outlet} from 'react-router-dom'
const PublicRoutes = () => {

const {token} = useAuthContext();
  console.log(token);
  return (
    token ? <Navigate to="/"/> : <Outlet/>
  )
}

export default PublicRoutes