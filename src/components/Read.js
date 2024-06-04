import React, { useState } from "react";
import app from "../firebaseConfig";
import { getDatabase, ref, get } from "firebase/database";

const Read = () => {
  let [fruitArray, setFruitArray] = useState([]);

  const fetchData = async () => {
    const db = getDatabase(app);
    const dbRef = ref(db, "nature/fruits");
    const snapshot = await get(dbRef);
    if (snapshot.exists()) {
      setFruitArray(Object.values(snapshot.val()));
    } else {
      alert("error");
    }
  };

  return (
    <div>
      <button onClick={fetchData}>Display data</button>
      <ul>
        {fruitArray.map((ele, ind) => (
          <li key={ind}>
            {ele.fruitName} : {ele.fruitDefinition}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Read;
