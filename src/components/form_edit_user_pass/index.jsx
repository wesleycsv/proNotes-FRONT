import React from "react";
import { FaKey } from "react-icons/fa6";
import { Container } from "./styles";
import UserServices from "../../services/user"


const FormEdit = () => {
  const [password, setPassword] = React.useState("")
  const [confirmaSenha, setConfirmaSenha] = React.useState("")
  const [status, setStatus] = React.useState("")


  const handSubmit = async (e) => {
    e.preventDefault();

    if (password || confirmaSenha) {

    if (password === confirmaSenha) {
        try {
          await UserServices.updateEditPass({ password })
          setStatus("sucesso")
        } catch (error) {
          setStatus("error")
          console.log("Error ao atualizar os dados")
        }
      } else {
        setStatus("senhaErrada")
      }

    } else {
      setStatus("vazio")
    }
  }

  return (
    <>
      <Container>
        <form action="" onSubmit={handSubmit}>
          <div className="formTitle">
            <h1>Ateração da Senha</h1>
            <span>Informações pessoas de acesso</span>
          </div>
          <div>
            <label htmlFor=""><FaKey size={15} /> Senha</label>
            <input type="password" placeholder="Sua Senha" value={password || ""} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div>
            <label htmlFor=""><FaKey /> Confirma Senha</label>
            <input type="password" placeholder="Confirma Senha" value={confirmaSenha || ""} onChange={(e) => setConfirmaSenha(e.target.value)} />
          </div>
          <input className="btnAtulizaDados" type="submit" value="Atulizar Senha" />
          <span>{status == "sucesso" && <span className="sucesso">Senha Atualizada com sucesso</span>}</span>
          <span>{status == "error" && <span className="error">Error ao atualizar a senha</span>}</span>
          <span>{status == "senhaErrada" && <span className="vazio">Senhas não são iguais</span>}</span>
          <span>{status == "vazio" && <span className="vazio">Favor preencher todos os campos</span>}</span>
        </form>
      </Container>
    </>
  )
}

export default FormEdit