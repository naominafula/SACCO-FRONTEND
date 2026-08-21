import React from "react";

function Table({ columns, data }) {
  const renderCell = (column, value) => {
    if (column === "Status") {
      const className = String(value).toLowerCase().replace(/\s+/g, "-");
      return <span className={`status-badge ${className}`}>{value}</span>;
    }

    return value;
  };

  return (
    <div className="table-container">
      <table className="data-table">
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th key={index}>{column}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.length > 0 ? (
            data.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {columns.map((column, columnIndex) => (
                  <td key={columnIndex}>{renderCell(column, row[column])}</td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={columns.length}>No records found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Table;