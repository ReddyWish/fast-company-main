import React from "react";
import api from "../api";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

function UserPage({id}) {
  const [user, setUser] = React.useState();
  React.useEffect(() => {
    api.users.getById(id).then((data) => setUser(data));
  }, []);
  console.log(user);

  if (user) {
    return (
      <div>
        <h1>{user.name}</h1>
        <h2>Profession: {user.profession.name}</h2>
        {
          user.qualities.map(qual => <span key={qual._id} className={"badge m-1 bg-" + qual.color}>{qual.name}</span>)
        }
        <h3>completed meetings: {user.completedMeetings}</h3>
        <h2>Rate: {user.rate}</h2>
        <Link to="/users">
        <button>All users</button>
        </Link>
      </div>
    );
  } return "loading...";
}

UserPage.propTypes = {
  id: PropTypes.string.isRequired
};

export default UserPage;
