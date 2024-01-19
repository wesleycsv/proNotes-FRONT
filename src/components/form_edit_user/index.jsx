import React from "react";
import { FaEnvelopeCircleCheck, FaUser } from "react-icons/fa6";
import { Container } from "./styles";
import UserServices from "../../services/user"
import DeleteUser from "../deleteUser"


const FormEdit = () => {
  const [name, setName] = React.useState("")
  const [email, setEmail] = React.useState("")
  const [status, setStatus] = React.useState("")



  const getUseLocalStore = async () => {
    const user = await JSON.parse(localStorage.getItem("user"))
    setName(user["name"])
    setEmail(user["email"])
  }

  const handSubmit = async (e) => {
    e.preventDefault();

    if (name || email) {
      try {
        await UserServices.updateEdit({ name, email })
        setStatus("sucesso")
      } catch (error) {
        setStatus("error")
        console.log("Error ao atualizar os dados")
      }
    } else {
      setStatus("error")
    }

  }



  React.useEffect(() => {
    getUseLocalStore()
  }, [])
  return (
    <>
      <Container>
        <form action="" onSubmit={handSubmit}>
          <div className="formTitle">
            <h1>Atualizações Cadastrais</h1>
            <span>Informações pessoas</span>
          </div>
          <div>
            <label htmlFor=""><FaUser size={15} /> Nome</label>
            <input type="text" placeholder="Seu Nome" value={name || ""} onChange={(e) => setName(e.target.value)} />
          </div>
          <div>
            <label htmlFor=""><FaEnvelopeCircleCheck /> E-mail</label>
            <input type="email" placeholder="Seu E-mail" value={email || ""} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <input className="btnAtulizaDados" type="submit" value="Atulizar dados" />
          <span>{status == "sucesso" && <span className="sucesso">Registro Atualizado com sucesso</span>}</span>
          <span>{status == "error" && <span className="error">Error ao atualizar o registro</span>}</span>
        </form>
        <div className="delete">
          <DeleteUser/>
        </div>
      </Container>
    </>
  )
}

export default FormEdit