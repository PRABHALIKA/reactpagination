import "./TableComponent.css";
import React from "react";

function template() {
  return (
    <div className="table-component">
     
     <h3>{this.props.heading}</h3>

     <table border="2px">
         <tr>
           {
             this.props.headers.length > 0 && this.props.headers.map((v,i)=>{
                  return <th>{v}</th>
             })
           }
          </tr>

          {
            this.props.data.length > 0 && this.props.data.map((obj)=>{
                  return <tr>
                            {
                              this.props.keys.length > 0 && this.props.keys.map((v)=>{
                                      return  <td>{obj[v]}</td>
                              })
                            }
                         </tr>
            })
          }
     </table>
    </div>
  );
};

export default template;
