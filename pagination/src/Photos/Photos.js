import React    from "react";
import template from "./Photos.jsx";
import ServerCall from '../servcies/ServerCall';
class Photos extends React.Component {
  constructor(){
    super();
    this.state={
      'headers':["ID","TITLE", "URL"],
      'keys':['id','title','url'],
      'totalData':[],
      'tableData':[]
    }
    this.fnGetTableData=this.fnGetTableData.bind(this);
  }
  componentWillMount(){
    ServerCall.fnGetJ('photos')
    .then((res)=>{
      this.setState({
        'totalData':res,
        'tableData':res.slice(0,100)
      })
    },(res)=>{
      this.setState({
        'data':[]
      })
    })
  }
  render() {
    return template.call(this);
  }

  fnGetTableData(tableData){
    debugger;
      this.setState({
        'tableData':tableData
      })
  }
}

export default Photos;
