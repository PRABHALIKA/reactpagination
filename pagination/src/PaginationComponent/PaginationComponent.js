import React    from "react";
import template from "./PaginationComponent.jsx";

class PaginationComponent extends React.Component {
  constructor(){
    super();
    this.state={
      'currPage':1,
      'perPage':100
    }
  }
  render() {
    return template.call(this);
  }
  fnGo(){
    let currPage=Number(this.refs.no.value);
    if(isNaN(currPage) || !currPage){
      return;
    }
    this.fnPrepareTableData(currPage);
  }

  fnNext(){
    let currPage=this.state.currPage+1;
    this.fnPrepareTableData(currPage);
  }

  fnPre(){
    let currPage=this.state.currPage-1;
    this.fnPrepareTableData(currPage);
  }

  fnPrepareTableData(currPage){
    debugger;
    let end=currPage*this.state.perPage;
    let start=end-this.state.perPage;
    let tableData=this.props.total.slice(start,end);
    this.setState({
      'currPage':currPage
    });
    this.props.tableData(tableData)
  }
}

export default PaginationComponent;
