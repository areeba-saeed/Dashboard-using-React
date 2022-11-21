import React, { useState, useEffect } from "react";

// import { db } from "../components/config/fire";
import { database } from "../components/config/fire";
// import {
//   collection,
//   getDocs,
//   deleteDoc,
//   updateDoc,
//   addDoc,
//   doc,
// } from "firebase/firestore";
import { ref, onValue, endAt } from "firebase/database";

function Product() {
  // const [buttoncreateTrigger, setButtonCreateTrigger] = useState(false);
  // const [buttonUpdateTrigger, setButtonUpdateTrigger] = useState(false);

  const [gas, setGas] = useState([]);

  useEffect(() => {
    return onValue(ref(database, `/`), (querySnapShot) => {
      let data = querySnapShot.val();
      setGas(data);
    });
  }, []);

  // 5
  let gasRef = Object.keys(gas);
  var counter = 0;
  var counter2 = 0;
  var counter3 = 0;

  gasRef.forEach((key) => {
    let gasAll = gas[key];
    if (gasAll.cat == "5") {
      counter++;
    }
    if (gasAll.cat == "10") {
      counter2++;
    }
    if (gasAll.cat == "15") {
      counter3++;
    }
  });

  return (
    /* content */
    <div className="admin-content">
      <div id="admin-info">
        <header>Products</header>
        <div>
          <table>
            <tr>
              <th>5 kg</th>
              <th>10 kg</th>
              <th>15 kg</th>
            </tr>

            <tr>
              <td>{counter} devices</td>
              <td>{counter2} devices</td>
              <td>{counter3} devices</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Product;
