import React from "react";


// eslint-disable-next-line import/no-anonymous-default-export
export default props =>{
    const bt = props.pressButton;
    //função para gerar idade aleatória com a idade max 70 e min 50
    //nessa função o Math.random() gera um número aleatório onde 20 é o intervalo de 50 á 70
    const gerarIdade = () => parseInt(Math.random() * (20)) + 50;
    const gerarNerd = () => Math.random() > 0.5;
    return(
        <div>
            <div>
                Recebendo do Filho
            </div>
            <button onClick = {
                function (e){
                bt('Assilon', gerarIdade(), gerarNerd())
            }}>Fornece Informação</button>           
        </div>
    );
}