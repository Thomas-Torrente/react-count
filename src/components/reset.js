import React from "react";

const Reset = () => {
  // window.location.reload();

  return (
    <div className="btn">
      <button className="reset" onClick={Reset}>
        Reset
      </button>
    </div>
  );
};

export default Reset;
