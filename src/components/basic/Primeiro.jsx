

// export default function Primeiro(){
//     return 'Primeiro Componente'
// }
//para fazer uso de jsx devemos importar o react dessa forma teremos o uso do jsx
 
import React from "react";

export default function Primeiro(){
  const msg = 'Seja bem vindo ao React '
    return (
      <div>
        <h2> Primeiro Componente</h2>
        <p>
          { msg }
        </p>
      </div>  
    );
}
