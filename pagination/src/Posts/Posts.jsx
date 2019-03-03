import "./Posts.css";
import React from "react";
import  TableComponent from '../TableComponent/TableComponent';
import PaginationComponent from '../PaginationComponent/PaginationComponent';

function template() {
  return (
    <div className="posts">
           <TableComponent heading="POSTS" headers={this.state.headers} data={this.state.tableData} keys={this.state.keys} />
           {
             this.state.totalData.length > 100 && 
           <PaginationComponent total={this.state.totalData} tableData={this.fnGetTableData} />
           }
          

    </div>
  );
};

export default template;
