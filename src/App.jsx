import React from "react";
import "./App.css";

import Card from "./components/layout/Card";
import Primeiro from "./components/basic/Primeiro";
import Paramentro from "./components/basic/Parametro";
import Fragments from "./components/basic/Fragments";
import Aleatorio from "./components/basic/Aleatorio";
import Familia from "./components/basic/Familia";
import FamiliaMembro from "./components/basic/FamiliaMembro";
import ListAlunos from "./components/repetição/ListAlunos";
import TabelaProdutos from "./components/repetição/TabelaProdutos";
import ParOuImpar from "./components/condicional/ParOuImpar";
import UsuarioInfo from "./components/condicional/UsuarioInfo";
import DiretaPai from "./components/condicional/Comunicação/DiretaPai";
import IndiretaPai from "./components/condicional/Comunicação/IndiretaPai";
import Input from "./components/formulario/Input";

const tag = <strong> Manoel Junior </strong>;

export default function App() {
  return (
    <div id="app">
      <h1>Fundamentos do React</h1>
      <div className="Cards">
        
        <Card titulo="#12 Componentes Controlados" color="#59298894">
          <Input></Input>
        </Card>

        <Card titulo="#11 Comunicação Indireta" color="#592332C">
          <IndiretaPai></IndiretaPai>
        </Card>

        <Card titulo="#10 Comunicação Direta" color="#592">
          <DiretaPai></DiretaPai>
        </Card>

        <Card titulo="#09 Renderização Condicional" color="#3A9ADA">
          <ParOuImpar numero={20}></ParOuImpar>
          <UsuarioInfo usuario={{ nome: "Manoel" }} />
          <UsuarioInfo usuario={{}} />
        </Card>

        <Card titulo="#08 Repetição" color="#FF4C65">
          <TabelaProdutos></TabelaProdutos>
        </Card>

        <Card titulo="#07 Repetição" color="#088C">
          <ListAlunos></ListAlunos>
        </Card>

        <Card titulo="#06 Componentes Filhos 02" color="#00C">
          <Familia sobrenome="Adamastor" />
          <FamiliaMembro nome="Lolita" />
        </Card>
        <Card titulo="#05 Componentes Filhos" color="#00C">
          <FamiliaMembro nome="João" sobrenome=" Ferreira " />
          <FamiliaMembro nome="Manoel" sobrenome=" Ferreira " />
          <FamiliaMembro nome="Mateus" sobrenome=" Ferreira " />
        </Card>

        <Card titulo="#04 Desafio Aleatório" color="#080">
          <Aleatorio min={1} max={30} />
        </Card>

        <Card titulo="#03 Fragmentos" color="#D63">
          <Fragments />
        </Card>

        <Card titulo="#02 Usando Parâmetros" color="#FA6">
          <Paramentro
            Title="React curso"
            Subtitle="curso Udemy react"
            student="Nairobe"
            nota={9.5}
          />
        </Card>

        <Card titulo="#01 Fragmentos" color="#FA84">
          <p>Olá {tag}</p>
          <Primeiro></Primeiro>
        </Card>
      </div>
    </div>
  );
}
