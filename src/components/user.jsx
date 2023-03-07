import React from "react";
import Bookmark from "./bookmark";
import PropTypes from "prop-types";
const User = ({
  _id,
  name,
  qualities,
  profession,
  completedMeetings,
  rate,
  onDelete,
  onToggleBookMark,
  bookmark
}) => {
  return (
    <tr>
      <td>
        {name}
      </td>
      <td>
      </td>
      <td>{profession.name}</td>
      <td>{completedMeetings}</td>
      <td>{rate}</td>
      <td>
        <Bookmark status={bookmark} onClick={() => onToggleBookMark(_id)} />
      </td>
      <td>
      </td>
    </tr>
  );
};
User.propTypes = {
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  qualities: PropTypes.array,
  profession: PropTypes.object.isRequired,
  completedMeetings: PropTypes.number.isRequired,
  rate: PropTypes.number.isRequired,
  onDelete: PropTypes.func.isRequired,
  bookmark: PropTypes.bool,
  onToggleBookMark: PropTypes.func.isRequired
};

export default User;
