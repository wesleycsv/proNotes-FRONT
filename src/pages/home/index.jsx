import React from "react";

import Header from "../../components/header";

import { Container, ContentHero } from "./styles";

const Home = () => {
  return (
    <>
      <Header />
      <Container>
        <ContentHero>
          <h1>Organize sua vida</h1>
          <p>
            Lembre-se de cada projeto com suas notas, tarefas e calendário,
            <span>tudo no mesmo lugar.</span>
          </p>
          <button>Cadastre-se gratuitamente</button>
        </ContentHero>
      </Container>
    </>
  );
};
export default Home;
