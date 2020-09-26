import React from "react";
import { Avatar } from "@material-ui/core";

import "./SidebarRow.css";

function SidebarRow({ src, title, Icon }) {
  return (
    <div className="sidebar__row">
      {src && <Avatar src={src} />}
      {Icon && <Icon />}
      <h4>{title}</h4>
    </div>
  );
}

export default SidebarRow;
