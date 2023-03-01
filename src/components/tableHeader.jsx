import React from "react";
import PropTypes from "prop-types";

function TableHeader({onSort, selectedSort, columns}) {
  console.log(selectedSort);
  const handleSort = (item) => {
    if (selectedSort.path === item) {
      onSort({
        ...selectedSort,
        order: selectedSort.order === "desc" ? "asc" : "desc"
      });
    } else {
      onSort({path: item, order: "asc"});
    }
  };
  return (
    <thead>
    <tr>
      {Object.keys(columns).map(column => {
        const sortDirection = selectedSort.order === "asc" ? "down" : "up";
        return <th key={column}
                   onClick={columns[column].path ? () => handleSort(columns[column].path) : undefined}
                   {...{role: columns[column].path && "button"}}
                   scope="col"> {columns[column].name}
          {selectedSort.path === columns[column].path ? <i className={`bi bi-caret-${sortDirection}-fill`}></i> : ""}
        </th>;
      })}
    </tr>
    </thead>
  );
}

TableHeader.propTypes = {
  onSort: PropTypes.func.isRequired,
  selectedSort: PropTypes.object.isRequired,
  columns: PropTypes.object.isRequired
};

export default TableHeader;
