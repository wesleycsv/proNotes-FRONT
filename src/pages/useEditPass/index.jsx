import React from "react";
import Header from "../../components/header_logado";
import FormEditUserPass from "../../components/form_edit_user_pass"

const UseEditPass = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <>
      <Header setIsOpen={setIsOpen} isOpen={isOpen} />
     <FormEditUserPass />
    </> 
  );
};
export default UseEditPass;
