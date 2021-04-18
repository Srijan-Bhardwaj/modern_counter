import React, { useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";
import Tooltip from "@material-ui/core/Tooltip";

const App = () => {
  const [count, setCount] = useState(0);

  const incr = () => {
    setCount(count + 1);
  };

  const decr = () => {
    if (count == 0) {
      setTimeout(() => {
        alert("Minimum limit reached!");
      }, 250);
    } else {
      setCount(count - 1);
    }
  };

  return (
    <>
      <div className="wrapper">
        <div className="container">
          <div className="header"><span>{count}</span></div>
          <div className="btn">
            <Tooltip title="increment">
              <IconButton
                color="primary"
                className="btn1"
                onClick={incr}
              >
                <AddIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="decrement">
              <IconButton color="secondary" className="btn2" onClick={decr}>
                <DeleteIcon />
              </IconButton>
            </Tooltip>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
