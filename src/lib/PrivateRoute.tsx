import React from "react"
import { Redirect, Route } from "react-router-dom"

interface Props {
    component: any,
    path: any,
    exact: any,
    role: any
}

export const PrivateRoute: React.FC<Props> = ({ component, path, exact, role }) => {
  const isAuthenticated = localStorage.getItem("IsLoggedIn") ? true : false
  return isAuthenticated ? role==localStorage.getItem("Role") ? (
    <Route path={path} exact={exact} component={component} />
  ) : (<Redirect to="/bloodNeeded" />) : (
    <Redirect to="/signIn" />
  )
}