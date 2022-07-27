import React from 'react'
import { Redirect, Route } from 'react-router-dom';

export default function ProtectedRoute(props) {
    return (
      <Route path={props.path}>
        {props.isLoggedIn ? props.children : <Redirect to="/" />}
      </Route>
    );
  }