import { Component } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "hooks/useAuth";
import { paths } from '../../routes';

export const RestrictedRoute = ({component = Component, redirectTo = paths.HOME}) => {

  const { isLoggedIn } = useAuth();
  
  return  (isLoggedIn) ? <Navigate to={redirectTo}/> : component;
}