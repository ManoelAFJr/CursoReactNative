/* eslint-disable import/no-anonymous-default-export */
import React from "react";

export default (props) =>{
  const status = props.nota >= 7 ? 'Aprovado ': 'Reprovado';
    return(
      <div>
        <h1>{ props.Title }</h1>
        <h3>{ props.Subtitle }</h3>
        <p>
        <strong> { props.student } </strong>
        tem nota:
        <strong> { props.nota } </strong>
        está
        <strong> { status } </strong>
        </p>
      </div>
    ); 
}