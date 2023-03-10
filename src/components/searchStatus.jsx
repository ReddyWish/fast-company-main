import React from "react";
import PropTypes from "prop-types";

function SearchStatus({ length }) {
  const renderPhrase = (number) => {
    const lastOne = Number(number.toString().slice(-1));
    if (number > 4 && number < 15) return "человек тусанёт";
    if ([2, 3, 4].indexOf(lastOne) >= 0) return "человека тусанут";
    if (lastOne === 1) return "человек тусанёт";
  };
  return (
    <h2>
      <span className={"badge bg-" + (length > 0 ? "primary" : "danger")}>
        {length > 0
          ? `${length} ${renderPhrase(length)} с тобой сегодня`
          : "никто с тобой не тусанёт"}
      </span>
    </h2>
  );
}
SearchStatus.propTypes = {
  length: PropTypes.number
};

export default SearchStatus;
