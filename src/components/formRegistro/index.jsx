import React from "react";
import { useNavigate } from "react-router-dom";
import { FaKey, FaEnvelope, FaUser } from "react-icons/fa6";

import UserServices from "../../services/User";

import { FormContent, ContainerError } from "./styles";

const FormLogin = () => {
  const [nome, setNome] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [redirecinaLogin, setRedirecinaLogin] = React.useState(false);
  const [error, setError] = React.useState("");

  let navigate = useNavigate();

  React.useEffect(() => {
    if (redirecinaLogin) {
      navigate("/login");
    }
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let user = await UserServices.register({ nome, email, password });
      console.log(user);
      setRedirecinaLogin(true);
    } catch (error) {
      console.log(error);
      setError(true);
    }
  };

  return (
    <>
      <FormContent>
        <h1>Registre-se</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="">
              <FaUser /> Nome
            </label>
            <input
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </div>
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
            <input className="inscreveSe" type="submit" value="Inscrever-se" />
            <a
              className="fazerLogin"
              onClick={(e) => setRedirecinaLogin(true)}
              to=""
            >
              Fazer Login
            </a>
          </div>
        </form>
        <ContainerError>
          {error && (
            <span>
              Favor preencher todos os <b>campos</b>
            </span>
          )}
        </ContainerError>
      </FormContent>
    </>
  );
};

export default FormLogin;
