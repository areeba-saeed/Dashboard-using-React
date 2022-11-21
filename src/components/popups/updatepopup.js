import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import "../popups.css";
// import { updateDoc, collection } from "firebase/firestore";
// import { db } from "../config/fire";

function Updatepopup(props) {
  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <AiOutlineClose
          className="close"
          onClick={() => props.setUpdateTrigger(false)}
        />
        {props.children}
        <h1>Update Admin</h1>

        {/* form */}
        <form>
          <div className="form">
            <label>Name</label>
            <input type="text" placeholder="Enter Admin's Name" />
          </div>
          <div className="form">
            <label>Email</label>
            <input type="email" placeholder="Enter Admin's Email" />
          </div>
          <div className="form">
            <label>Phone Number</label>
            <input type="text" placeholder="Enter Admin's Phone Number" />
          </div>
          <div className="form">
            <label>Devices</label>
            <input type="text" placeholder="Enter Admin's Devices" />
          </div>
          <div className="form">
            <label>Location</label>
            <input type="text" placeholder="Enter Admin's Location" />
          </div>
          <div className="form">
            <label>Device_no</label>
            <input type="text" placeholder="Enter Admin's Device_no" />
          </div>

          <div className="buttonform">
            <button type="Submit" value="Add">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  ) : (
    ""
  );
}

export default Updatepopup;
