import React    from "react";
import template from "./TableComponent.jsx";

class TableComponent extends React.Component {
  render() {
    return template.call(this);
  }
}

export default TableComponent;
