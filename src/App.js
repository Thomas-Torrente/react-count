import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import ButtonP from "./components/ButtonP";
import ButtonM from "./components/ButtonM";
import Reset from "./components/reset";
import Footer from "./components/Footer";

function App() {
  const [counter, setCounter] = useState(0);
  // couter permet "d'afficher le résultat" Setcounter permet de mettre a jours la valeur de counter et useState permet d'initialiser la valeur aux nombre mis entre ()

  return (
    <>
      <div className="contenair">
        <Header />
        <div className="allCounter">
          <ButtonM counter={counter} setCounter={setCounter} />
          <div className="Counter">{counter}</div>
          <ButtonP counter={counter} setCounter={setCounter} />
        </div>
        <Reset className="reset" />

        <Footer />
      </div>
    </>
  );
}

export default App;
