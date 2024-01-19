import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa6";
import { Link } from "react-router-dom";
import FormLogin from "../../../components/formRegistro";

import logo from "../../../assets/img/logoImg.png";

import { Container, ContainerRegistro, ContainerInfo } from "./styles";

const Registro = () => {
  return (
    <>
      <Container>
        <ContainerRegistro>
          <FormLogin />
        </ContainerRegistro>
        <ContainerInfo>
          <div>
            <Link to="/">
              {" "}
              <img src={logo} alt="" />
            </Link>
            <h1>
              <span>Organize</span> sua vida de uma maneira <span>melhor.</span>
            </h1>
            <p>
              Lembre-se de cada projeto com suas notas, tarefas e calendário,
              tudo no mesmo lugar.
            </p>
            <div className="redeSociais">
              <Link to="">
                <FaFacebook size={30} color="#CCC" />
              </Link>
              <Link to="">
                <FaInstagram size={30} color="#CCC" />
              </Link>
              <Link to="">
                <FaLinkedin size={30} color="#CCC" />
              </Link>
            </div>
          </div>
        </ContainerInfo>
      </Container>
    </>
  );
};

export default Registro;
