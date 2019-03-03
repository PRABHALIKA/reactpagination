import React    from "react";
import template from "./Posts.jsx";
import ServerCall from '../servcies/ServerCall';

class Posts extends React.Component {
  constructor(){
    super();
    this.state={
      headers:["ID","TItle","Body"],
      tableData:[],
      totalData:[],
      keys:['id','title','body']
    }
  }
  componentWillMount(){
    ServerCall.fnGetJS('posts')
    .then((res)=>{
      res=JSON.parse(res);
      this.setState({
        'tableData':res.slice(0,100),
        'totalData':res
      })
    })
    .catch((res)=>{
      this.setState({
        'tableData':[],
        'totalData':[]
      })
    })
  }
  render() {
    return template.call(this);
  }

  fnGetTableData(tableData){
      this.setState({
        'tableData':tableData
      })
  }
}

export default Posts;
