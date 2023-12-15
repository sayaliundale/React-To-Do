import React, { useState } from "react";
import "../App.css";
import Manager from "./TaskManagment";

const Header = () => {
  const [managerCount, setManagerCount] = useState(0);
  const [managers, setManagers] = useState([]);

  const addManager = () => {
    setManagers([...managers, <Manager key={managerCount} />]);
    setManagerCount(managerCount + 1);
  };

  return (
    <div>
      <div className="header">
        To-do-List
        <button onClick={addManager}>+</button>
        
      </div>
      <div className="container">
        
        {managers.map((manager) => manager)}
      </div>
    </div>
  );
};

export default Header;
