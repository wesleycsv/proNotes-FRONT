import React from "react";
import { Link } from "react-router-dom";
import { ContainerBackground, ContainerHeader } from "./styles";
import { FaAlignJustify, FaArrowRightFromBracket, FaFingerprint, FaKey } from "react-icons/fa6";
import UserServices from "../../services/user";
import logo from "../../assets/img/logoImg.png";

const HeaderLogado = (props) => {
  const [user, setUser] = React.useState(localStorage.getItem("user"))
  const handleLogout = () => {
    UserServices.logout();
  };

  return (
    <>
      <ContainerBackground>
        <ContainerHeader>
          <div><span className="menu" onClick={(e) => props.setIsOpen(!props.isOpen)}><FaAlignJustify size={20} color="#FFF" className="btn-handle" />Menu</span>
           <Link to="/notes"><img src={logo} alt="" /></Link> 
          </div>
          <div className="info">
            <h2>
              <span>Olá, </span> {JSON.parse(user)["name"]}
            </h2>
            <Link to="/useEdit">
              <FaFingerprint size={20} color="#FFF" className="infoUserEdit" />
            </Link>
            <Link to="/UseEditPass">
              <FaKey size={20} color="#FFF" className="infoUserEdit" />
            </Link>
            <a onClick={handleLogout} className="linkLogout" href="">
              <FaArrowRightFromBracket /> Sair
            </a>
          </div>
        </ContainerHeader>
      </ContainerBackground>
    </>
  );
};

export default HeaderLogado;
