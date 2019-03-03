import React    from "react";
import template from "./Menu.jsx";

class Menu extends React.Component {
  render() {
    return template.call(this);
  }

  componentWillMount(){
   
    setTimeout(()=>{
      debugger;
      let path=window.location.hash;
       path=path.replace('#/','');
      if(path == ""){
        path="users";
      }
      let menuEle=document.getElementById(path);
      menuEle.classList.add('active-menu');
      debugger;
    },10);
   
  }

  fnMenuClick(e){
    let targetEle=e.target;
    let activeMenu=document.querySelector('.tabs > a.active-menu');
    if(activeMenu){
      activeMenu.classList.remove('active-menu')
    }
    targetEle.classList.add('active-menu');
  }
}

export default Menu;
