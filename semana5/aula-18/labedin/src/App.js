import React from "react";
import "./App.css";
import CardGrande from "./components/CardGrande/CardGrande";
import ImagemButton from "./components/ImagemButton/ImagemButton";
import CardPequeno from "./components/CardPequeno/CardPequeno";
import fotoGaspar from "./Imagens/FotoGaspar.jpg";
import logolabenu from "./Imagens/labenu_logo.png";
import logotwitch from "./Imagens/twitch_logo.png";
import adress from "./Imagens/house-24px.svg";
import email from "./Imagens/email-24px.svg";

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande
          imagem={fotoGaspar}
          nome="Diogo Gaspar"
          descricao="Oi, eu sou o Gaspar, aspirante a desenvolvedor FullStack aqui estudando na Labenu_"
        />
        <ImagemButton
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png"
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande
          imagem={logolabenu}
          nome="Labenu"
          descricao="Estudante do curso de formação para desenvolvedor FullStack da turma 6 --  MELLO"
        />

        <CardGrande
          imagem={logotwitch}
          nome="Twitch.tv"
          descricao="Na falta do que fazer durante a quarentena, voltei a ter tempo de jogar e resolvi streamar para passar o tempo"
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png"
          texto="Facebook"
        />

        <ImagemButton
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png"
          texto="Twitter"
        />
      </div>
      <div className="page-contact-container">
        <h2>Contatos</h2>
        <CardPequeno
          imagem1={email}
          contato1="ghostlabz@gmail.com"
          imagem2={adress}
          contato2="All Around The World"
        />
      </div>
    </div>
  );
}

export default App;
