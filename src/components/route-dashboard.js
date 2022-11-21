import React from "react";
import { SidebarData } from "./sidebardata";

function Routedashboard() {

  return (
    <div>
      <ul className="unordered">
        {SidebarData.map((val, key) => {
          return (
            <li className="list"
              key={key}
              onClick={() => {
                window.location.pathname = val.path;
              
              }}
            >
              <div className="hover-title">
                <div>{val.icon}</div>
                <div>{val.title}</div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Routedashboard;
