import React from "react";

const ButtonM = (props) => {
  return (
    <button
      onClick={() => {
        props.setCounter(props.counter - 1);
        // le boutton Moins accede a la valeur de props.counter et lui enleve 1 a chaque clique dessus
      }}
    >
      <img
        src="https://www.hebergeur-image.com/upload/90.107.122.214-5fa2ba2dc914f.png"
        alt=""
      />
      {props.counter === 0 && null}
    </button>
  );
};

export default ButtonM;
