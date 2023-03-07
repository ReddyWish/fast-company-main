import React from "react";
// import User from "./user";
import UsersTable from "./usersTable";
import Pagination from "./pagination";
import {paginate} from "../utils/paginate";
import PropTypes from "prop-types";
import GroupList from "./groupList";
import SearchStatus from "./searchStatus";
import api from "../api";
import _ from "lodash";

function UsersList() {
  const [professions, setProfessions] = React.useState();
  const [selectedProf, setSelectedProf] = React.useState();
  const pageSize = 4;
  const [currentPage, setCurrentPage] = React.useState(1);
  const [sortBy, setSortBy] = React.useState({path: "name", order: "asc"});
  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex);
  };

  const [users, setUsers] = React.useState();

  React.useEffect(() => {
    api.users.fetchAll().then((data) => setUsers(data));
  }, []);
  const handleDelete = (userId) =>
    setUsers(users.filter((user) => user._id !== userId));

  const handleToggleBookMark = (id) => {
    setUsers(
      users.map((user) => {
        if (user._id === id) {
          return {...user, bookmark: !user.bookmark};
        }
        return user;
      })
    );
  };

  React.useEffect(() => {
    api.professions.fetchAll().then((data) => setProfessions(data));
  }, []);

  React.useEffect(() => {
    setCurrentPage(1);
  }, [selectedProf]);

  const handleProfessionSelect = (item) => {
    setSelectedProf(item);
  };

  const handleSort = (item) => {
    setSortBy(item);
  };

  if (users) {
    const filteredUsers = selectedProf ? users.filter(user => JSON.stringify(user.profession) === JSON.stringify(selectedProf)) : users;

    const count = filteredUsers.length;

    const sortedUsers = _.orderBy(filteredUsers, [sortBy.path], [sortBy.order]);

    const userCrop = paginate(sortedUsers, currentPage, pageSize);
    console.log(userCrop);
    const clearFilter = () => {
      setSelectedProf(undefined);
    };

    return (
      <div className="d-flex">
            {professions && (
              <div className="d-flex flex-column flex-shrink-0 p-3">
                <GroupList
                  items={professions}
                  selectedItem={selectedProf}
                  onItemSelect={handleProfessionSelect}
                />
                <button className="btn btn-secondary mt-2" onClick={clearFilter}>Очистить</button>
              </div>
            )}
            <div className="d-flex flex-column">
              <SearchStatus length={count}/>
              {count > 0 && (
                <UsersTable users={userCrop} onToggleBookMark={handleToggleBookMark} onDelete={handleDelete}
                            onSort={handleSort} selectedSort={sortBy}/>
              )}
              <div className="d-flex justify-content-center">
                <Pagination
                  itemsCount={count}
                  pageSize={pageSize}
                  onPageChange={handlePageChange}
                  currentPage={currentPage}
                />
              </div>
            </div>
          </div>
    );
  }
  return "loading...";
}

GroupList.defaultProps = {
  valueProperty: "_id",
  contentProperty: "name"
};

UsersList.propTypes = {
  users: PropTypes.array,
  onToggleBookMark: PropTypes.func,
  onDelete: PropTypes.func
};

export default UsersList;
