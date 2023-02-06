import React, { useState }from "react";
import IndiretaFilho from "./IndiretaFilho";

// eslint-disable-next-line import/no-anonymous-default-export
export default props =>{ 
    //esse componente pai vai receber informações do filho, usando hooks. no caso o componete useState
    //o useState retorna um array com 2 posições, a primeira é o valor e a segunda é uma função para atualizar o valor
    const [nome, setNome] = useState('?');
    const [idade, setIdade] = useState(0);
    const [nerd, setNerd] = useState(false);
    function forneceInformacao(nome, idade, nerd){
        setNome(nome);
        setIdade(idade);
        setNerd(nerd);
        //console.log('manoel', 55, true)
    }

    return(
        <div>
            <div>
                <span>{nome} </span>
                <span><strong>{idade} </strong></span>
                <span> é Nerd: {nerd ? 'Verdadeiro': 'Falso'}</span>
            </div>
            <IndiretaFilho pressButton = {forneceInformacao}></IndiretaFilho>            
        </div>
    );
}