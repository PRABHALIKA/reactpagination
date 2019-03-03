import React    from "react";
import template from "./Users.jsx";
import ServerCall from '../servcies/ServerCall';
class Users extends React.Component {
  constructor(){
    super();
    this.state={
      headers:["ID","User Name","email"],
      tableData:[],
      totalData:[],
      keys:['id','username','email']
    }
  }
  componentWillMount(){
    ServerCall.fnGetAxios('users')
    .then((res)=>{
      this.setState({
        'tableData':res.data.slice(0,100),
        'totalData':res.data
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

export default Users;
