import React from "react";
import Header from "../../components/header_logado";
import FormEditUser from "../../components/form_edit_user"

const UseEdit = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <>
      <Header setIsOpen={setIsOpen} isOpen={isOpen} />
     <FormEditUser />
    </> 
  );
};
export default UseEdit;
