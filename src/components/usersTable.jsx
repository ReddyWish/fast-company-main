import React from "react";
import PropTypes from "prop-types";
// import TableHeader from "./tableHeader";
// import TableBody from "./tableBody";
import Bookmark from "./bookmark";
import QualitiesList from "./qualitiesList";
import Table from "./table";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";

function UsersTable({users, onToggleBookMark, onDelete, onSort, selectedSort}) {
  const columns = {
    name: {path: "name", name: "Имя"},
    qualities: {name: "Качества", component: user => (<QualitiesList qualities={user.qualities}/>)},
    profession: {path: "profession.name", name: "Профессия"},
    completedMeetings: {path: "completedMeetings", name: "Встретился, раз"},
    rate: {path: "rate", name: "Оценка"},
    bookmark: {
      name: "Избранное",
      component: user => <Bookmark status={user.bookmark} onClick={() => onToggleBookMark(user._id)}/>
    },
    delete: {
      component: (user) => (
        <button className={"btn btn-danger"} onClick={() => onDelete(user._id)}> Delete </button>
      )
    }
  };

  return (
    <Table onSort={onSort} selectedSort={selectedSort} columns={columns} data={users}>
      <TableHeader onSort={onSort} selectedSort={selectedSort} columns={columns}/>
      <TableBody {...{columns, data: users}}/>
    </Table>
  );
}

UsersTable.propTypes = {
  users: PropTypes.array,
  onToggleBookMark: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onSort: PropTypes.func.isRequired,
  selectedSort: PropTypes.object.isRequired
};

export default UsersTable;
