import React from "react";
import {useParams} from "react-router-dom";
import UsersList from "./usersList";
import UserPage from "./userPage";

function Users(props) {
  const params = useParams();
  const {userId} = params;
  console.log(params);
  return (
    <>
      {
        userId ? <UserPage id={userId}/> : <UsersList/>
      }
    </>
  );
}

export default Users;
