import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import UserServices from "../../services/user"

const DeleteUser = () => {
    const [redirecionar, setRedirecionar] = React.useState(false)
    let navigate = useNavigate()


    const handleDelete = async () => {
        let confirmDelete = confirm("Deseja realmente excluir essa conta?")
        if (confirmDelete) {
            await UserServices.delete()
            setRedirecionar(true)
        }
    }

    React.useEffect(() => {
        if (redirecionar) {
            navigate("/")
        }
    })

    return (
        <>
            <span>O botão abaixo irá deletar sua conta e apaga todas as suas notas</span>
            <button onClick={handleDelete}>Deletar a conta</button>
        </>
    )


}

export default DeleteUser