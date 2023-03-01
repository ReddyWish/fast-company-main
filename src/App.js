import React from "react";
import Users from "./components/users";

function App() {
  // const [users, setUsers] = React.useState();
  //
  // React.useEffect(() => {
  //   api.users.fetchAll().then((data) => setUsers(data));
  // }, []);
  // const handleDelete = (userId) =>
  //   setUsers(users.filter((user) => user._id !== userId));
  //
  // const handleToggleBookMark = (id) => {
  //   setUsers(
  //     users.map((user) => {
  //       if (user._id === id) {
  //         return { ...user, bookmark: !user.bookmark };
  //       }
  //       return user;
  //     })
  //   );
  // };

  return (
    <Users/>
  );
}

export default App;
