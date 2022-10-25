import React from "react";
import alunos from "../../data/alunos";
// eslint-disable-next-line import/no-anonymous-default-export
export default props =>{
    // eslint-disable-next-line no-unused-vars
    // const list = (
    //     <li> {alunos[0].id}) {alunos[0].nome} -> {alunos[0].nota}</li>
    // ); 

    const alunoslis = alunos.map((alunos)=>{
        return(
            <li key={alunos.id}>
            {alunos.id}) {alunos.nome} -- {alunos.nota}
        </li>
        );
    });
    return(
        <div>
            <ul style= {{listStyle:'none'}}>
                 {alunoslis}
            </ul>
        </div>
    );
};