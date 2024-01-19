import React from "react";

import HeaderLogado from "../../components/header_logado";
import Note from "../../components/note";

import {} from "./styles";

const Notes = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <>
      <HeaderLogado setIsOpen={setIsOpen} isOpen={isOpen} />
      <Note isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};
export default Notes;
