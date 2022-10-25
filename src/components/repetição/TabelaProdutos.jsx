import React from "react";
import './TabelaProdutos.css'
import produtos from '../../data/produtos';


// eslint-disable-next-line import/no-anonymous-default-export
export default props =>{
  function getLinhas(){
    return produtos.map((produtos, i) => {
      return (
        <tr key={produtos.id} className= {i % 2 === 0 ? 'Par' : 'Impar'}>
          <td> {produtos.id} </td>
          <td> {produtos.nome} </td>
          <td>R$ {produtos.preco.toFixed(2).replace(',', ',')} </td>
        </tr>
      )
    });
  }
  return (
        <div className="TabelaProdutos">
              <table border="1">
                <thead>
                  <tr>
                    <th> id </th>
                    <th> Nome </th>
                    <th> Preço</th>
                  </tr>
                </thead>
                <tbody>
                  {getLinhas()}
                </tbody>
              </table>
        </div>
    );
}
