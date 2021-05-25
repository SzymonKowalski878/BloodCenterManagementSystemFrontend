import React from "react"
import { Redirect, Route } from "react-router-dom"

interface Props {
    component: any,
    path: any,
    exact: any,
}

export const LoginRoute: React.FC<Props> = ({ component, path, exact }) => {
  const isAuthenticated = localStorage.getItem("IsLoggedIn") ? true : false
  return isAuthenticated ?
  (
    <Redirect to="/bloodNeeded" />
  ) : (
    <Route path={path} exact={exact} component={component} />
  )
}