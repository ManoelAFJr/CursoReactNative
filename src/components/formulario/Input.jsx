import "./Input.css";
import React, { useState } from "react";

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
  const [valor, setValor] = useState("Inicial");
  function quandoMudar(e) {
    setValor(e.target.value);
  }
  return (
    <div className="Input">
      <h2>{valor}</h2>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* onchange busca na função sempre que a função mudar "quando digitado algo" */}
        <input value={valor} onChange={quandoMudar} />
        {/* compponente somente para leitura readOnly */}
        <input value={valor} readOnly />
        {/* Componente não controlado */}
        <input value={undefined} />
      </div>
    </div>
  );
};
