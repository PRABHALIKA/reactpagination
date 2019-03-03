import "./Photos.css";
import React from "react";
import TableComponent from '../TableComponent/TableComponent';
import PaginationComponent from '../PaginationComponent/PaginationComponent';
function template() {
  return (
    <div className="photos">
      <TableComponent heading="PHOTOS" headers={this.state.headers} data={this.state.tableData} keys={this.state.keys} />
      <PaginationComponent total={this.state.totalData} tableData={this.fnGetTableData} />
    </div>
  );
};

export default template;
