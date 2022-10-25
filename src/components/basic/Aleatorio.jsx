import React from "react";

// export default function Aleatorio() {
//     console.log(aleatorio);
//     return (
//       <>
//         <p>Numero aleatorio</p>
//         { aleatorio.toFixed(0) }

//       </>
//     );
//   }
export default function Aleatorio(props){
  //destruct
  const { min, max } = props;
  // const min = props.min;
  // const max = props.max;
  const aleatorio = parseInt(Math.random() * (min - max) + max); 
  return(
    <div>
    <h2>Valor aleatório</h2>
    <p>
      <strong>Valor minimo: </strong> { props.min }
    </p>
    <p>
      <strong>Valor maximo: </strong> { props.max }
    </p>
    <p>
      <strong>Valor escolhido: </strong> { aleatorio }
    </p>
  </div>
  );
} 
