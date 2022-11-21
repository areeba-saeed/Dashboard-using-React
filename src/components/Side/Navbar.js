import React, { useState } from "react";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { MdKeyboardArrowDown } from "react-icons/md";
import fire from "../config/fire";

function Navbar() {
  const [Open, setOpen] = useState(false);

  function logout() {
    fire.auth().signOut();
  }

  return (
    <div>
      <div className="navbar">
        <div className="nav-heading">
          <header className="name">Gas Cylinder</header>
          <AiOutlineUnorderedList className="icons" style={{}} />
        </div>
        <div>
          <BsFillPersonFill className="icons" />
          <MdKeyboardArrowDown
            className={`icons ${Open ? "rotate" : "icons"}`}
            onClick={() => {
              setOpen(!Open);
            }}
          />
        </div>
      </div>
      <ul
        className={`nav-unordered ${Open ? "active" : "inactive"}`}
        onClick={logout}
      >
        <li>Logout</li>
      </ul>
    </div>
  );
}

export default Navbar;
