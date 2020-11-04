import React from "react";

const ButtonP = (props) => {
  return (
    <button
      onClick={() => {
        props.setCounter(props.counter + 1);
        // le boutton plus accede a la valeur de props.counter et lui ajoute 1 a chaque clique dessus
      }}
    >
      <img
        src="https://www.hebergeur-image.com/upload/90.107.122.214-5fa2b95c93633.png"
        alt=""
      />
    </button>
  );
};

export default ButtonP;
