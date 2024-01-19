import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaKey, FaEnvelope } from "react-icons/fa6";

import UserServices from "../../services/User";

import logoImg from "../../assets/img/logoImgLogin.png";

import { FormContent, ContainerError, Container } from "./styles";

const FormLogin = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [redirecinaLogin, setRedirecinaLogin] = React.useState(false);
  const [error, setError] = React.useState("");

  let navigate = useNavigate();

  React.useEffect(() => {
    if (redirecinaLogin) {
      navigate("/notes");
    }
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await UserServices.login({ email, password });
      setRedirecinaLogin(true);
    } catch (error) {
      setError(true);
    }
  };

  return (
    <>
      <Container>
        <FormContent>
          <Link to="/">
            <img className="imgLogo" src={logoImg} alt="" />
          </Link>
          <h1>Fazer Login</h1>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="">
                <FaEnvelope /> E-mail
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="">
                <FaKey /> Senha
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="btn-group">
              <input className="fazerLogin" type="submit" value="Fazer login" />
            </div>
          </form>
          <ContainerError>
            {error && (
              <span>
                <b>E-mail</b> ou <b>Senha</b> inválido
              </span>
            )}
          </ContainerError>
        </FormContent>
      </Container>
    </>
  );
};

export default FormLogin;
