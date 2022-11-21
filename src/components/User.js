import React, { useState, useEffect } from "react";
import { FaRegWindowClose } from "react-icons/fa";
import { GrUpdate } from "react-icons/gr";
import Createpopup from "./popups/createpopup";
import Updatepopup from "./popups/updatepopup";
import { db } from "../components/config/fire";
import {
  collection,
  getDocs,
  deleteDoc,
  updateDoc,
  addDoc,
  doc,
} from "firebase/firestore";

function User() {
  const [buttoncreateTrigger, setButtonCreateTrigger] = useState(false);
  const [buttonUpdateTrigger, setButtonUpdateTrigger] = useState(false);

  const [admins, setAdmins] = useState([]);
  const adminCollection = collection(db, "User");

  useEffect(() => {
    const getAdmins = async () => {
      const data = await getDocs(adminCollection);
      setAdmins(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getAdmins();
  }, []);

  return (
    /* content */
    <div className="admin-content">
      <div id="admin-info">
        <header>User</header>

        <div>
          <table >
            <tr>
              <th>Customer_id</th>
              <th>Devices</th>
              <th>Password</th>
              <th>Phone Number</th>
              <th>Battery Status</th>
            </tr>

            {admins.map((admins) => {
              return (
                <tr>
                  <td>{admins.customer_id}</td>
                  <td>{admins.devices}</td>
                  <td>{admins.customer_password}</td>
                  <td>{admins.phone_number}</td>
                  <td>{admins.battery_status}</td>
                </tr>
              );
            })}
          </table>
        </div>
      </div>
    </div>
  );
}

export default User;
