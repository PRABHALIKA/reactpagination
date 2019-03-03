import "./Users.css";
import React from "react";
import  TableComponent from '../TableComponent/TableComponent';
import PaginationComponent from '../PaginationComponent/PaginationComponent';

function template() {
  return (
    <div className="users">
      <TableComponent heading="USERS" headers={this.state.headers} data={this.state.tableData} keys={this.state.keys} />
           {
             this.state.totalData.length > 100 && 
           <PaginationComponent total={this.state.totalData} tableData={this.fnGetTableData} />
           }
    </div>
  );
};

export default template;
