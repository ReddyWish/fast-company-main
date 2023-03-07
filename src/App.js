import React from "react";
// import UsersList from "./components/usersList";
import NavBar from "./components/navBar";
import {Route, Switch} from "react-router-dom";
import Main from "./components/main";
import Login from "./components/login";
import Users from "./components/users";


function App() {
  return (
    <>
      <NavBar/>
      <Switch>
        <Route path="/" exact component={Main}/>
        <Route path="/login" component={Login}/>
        <Route path="/users/:userId?" component={Users}/>
      </Switch>
    </>
  );
}

export default App;
