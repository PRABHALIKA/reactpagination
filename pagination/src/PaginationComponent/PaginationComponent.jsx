import "./PaginationComponent.css";
import React from "react";

function template() {
  return (
    <div className="pagination-component">
      <div>
        <input ref='no' /><input type="button" value="go" onClick={this.fnGo.bind(this)} />
      </div>
      <div>
        <input type="button" onClick={this.fnPre.bind(this)} value="pre" disabled={this.state.currPage==1}/>{this.state.currPage} <input onClick={this.fnNext.bind(this)} type="button" value="next" disabled={this.state.currPage == (this.props.total.length / this.state.perPage)}/>
      </div>
      <div>
        Total Pages : {this.props.total.length / this.state.perPage}
      </div>
    </div>
  );
};

export default template;
