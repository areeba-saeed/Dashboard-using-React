import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import "../popups.css";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../config/fire";

function Createpopup(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneno, setPhoneno] = useState("");
  const [admin_password, setAdminPassword] = useState("");
  const [device_no, setDeviceno] = useState("");
  const [quantity, setquantity] = useState("");
  const [product_cat, setpProductcat] = useState("");

  const adminCreateref = collection(db, "Admin");

  const [message, setMessage] = useState({ error: false, msg: "" });

  const addadmin = (admin) => {
    return addDoc(adminCreateref, admin);
  };
  // create admin function
  const createAdmin = async (e) => {
    e.preventDefault();

    const newAdmin = {
      name,
      phoneno,
      email,
      admin_password,
      product_cat,
      quantity,
    };
    console.log(newAdmin);

    try {
      await addadmin(newAdmin);
      setMessage({ error: false, msg: "Admin added successfully" });
    } catch (err) {
      setMessage({ error: true, msg: err.message });
    }
    setEmail("");
    setName("");
    setPhoneno("");
    setAdminPassword("");
    setpProductcat("");
    setquantity("");
  };

  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <AiOutlineClose
          className="close"
          onClick={() => props.setCreateTrigger(false)}
        />
        {props.children}
        <h1>Create Admin</h1>

        {/* form */}
        <form onSubmit={createAdmin}>
          <div className="form">
            <label>Name</label>
            <input
              type="text"
              placeholder="Enter Admin's Name"
              value={name}
              onChange={(event) => {
                setName(event.target.value);
              }}
            />
          </div>
          <div className="form">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter Admin's Email"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
          </div>
          <div className="form">
            <label>Phone Number</label>
            <input
              type="text"
              placeholder="Enter Admin's Phone Number"
              onChange={(event) => {
                setPhoneno(event.target.value);
              }}
              value={phoneno}
            />
          </div>
          <div className="form">
            <label>Password</label>
            <input
              type="text"
              placeholder="Enter Admin's Password"
              onChange={(event) => {
                setAdminPassword(event.target.value);
              }}
              value={admin_password}
            />
          </div>

          <div className="form-row">
            <div>
              <label>Quantity</label>
              <input
                type="text"
                onChange={(event) => {
                  setquantity(event.target.value);
                }}
                value={quantity}
              />
            </div>
            <div className="drop">
              <label>Product Category</label>
              <select
                onChange={(event) => {
                  setpProductcat(event.target.value);
                }}
                value={product_cat}
              >
                <option>5</option>
                <option>10</option>
                <option>15</option>
              </select>
            </div>
          </div>

          <div className="buttonform">
            <button type="Submit" value="Add">
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  ) : (
    ""
  );
}

export default Createpopup;
