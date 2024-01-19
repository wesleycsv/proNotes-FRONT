import React from "react";
import {
  ContainerBackground,
  Container,
  ContentHeader,
  ContentHero,
  Ul,
} from "./styles";
import logoImg from "../../assets/img/logoImg.png";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <ContainerBackground>
        <Container>
          <ContentHeader>
            <Link to="/">
              <img src={logoImg} alt="" />
            </Link>
            <Ul>
              <li>
                <Link className="linkHeaderRegistrar" to="/registro">
                  Registra
                </Link>
              </li>
              <li>
                <Link className="linkHeaderFazerLogin" to="/login">
                  Fazer Login
                </Link>
              </li>
            </Ul>
          </ContentHeader>
        </Container>
      </ContainerBackground>
    </>
  );
};
export default Header;
