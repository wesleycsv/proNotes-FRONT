import React from "react";
import { push as Menu } from "react-burger-menu";
import { FaChartLine, FaCirclePlus, FaDeleteLeft } from "react-icons/fa6";
import List from "../list";
import { ContainerNotes } from "./styles";
import Editor from "../editor";

import NotesServices from "../../services/notes";

const Notes = (props) => {
  const [notes, setnotes] = React.useState([]);
  const [current_node, setCurrent_node] = React.useState({});
  const [query, setQuery] = React.useState("");

  //READ
  const getAllNotes = async () => {
    try {
      let result = await NotesServices.listNotes();
      if (result.data.length >= 1) {
        setnotes(result.data.reverse());
        setCurrent_node(result.data[0]);
      } else {
        setnotes([]);
      }
    } catch (error) {
      console.log("Erro ao obter a nota");
    }
  };

  const stopSearch = () => {
    getAllNotes()
    setQuery("")

  }

  //DELETE
  const deleteNota = async (id) => {
    try {
      await NotesServices.delete(id);
      getAllNotes();
    } catch (error) {
      console.log("Erro ao deletar a nota" + error);
    }
  };

  //UPDATE
  const updateNota = async (oldNOte, params) => {
    try {
      const updateNota = await NotesServices.update(oldNOte._id, params);
      let index = notes.indexOf(oldNOte);
      let newNota = notes;
      newNota[index] = updateNota.data;
      setnotes(newNota);
      setCurrent_node(updateNota.data);
    } catch (error) {
      console.log("Erro ao atualizar  a nota" + error);
    }
  };

  //CREATE
  const handCreate = async () => {
    try {
      await NotesServices.create();
      getAllNotes();
    } catch (error) {
      console.log("error" + error);
    }
  };

  const handleKey = (e) => {
    if (e.key == "Enter") {
      search(query)
    }
  };
  //BUSCA
  const search = async (queryApi) => {
    try {
      const busca = await NotesServices.search(queryApi);
      setnotes(busca.data);
    } catch (error) {
      console.log("erro na busca" + error);
    }
  };

  //SELECIONAR NOTA
  const selecNota = (id) => {
    let nota = notes.find((note) => note._id == id);
    setCurrent_node(nota);
  };

  React.useEffect(() => {
    getAllNotes();
  }, []);

  return (
    <>
      <ContainerNotes className="notes" id="notes">
        <Menu
          papeWrapId={"notes-editor"}
          isOpen={props.isOpen}
          onStateChange={(state) => props.setIsOpen(state.isOpen)}
          disableAutoFocus
          outerContainerId={"notes"}
          customBurgerIcon={false}
          customCrossIcon={false}
        >
          <div className="search">
            <input
              type="text"
              value={query}
              name={query}
              onKeyDown={handleKey}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Busca Nota" />
              <a href="#" onClick={stopSearch}><FaDeleteLeft size={30} color="#bbb" /></a>
          </div>
          <div className="countNotes">
            <span>
              <FaChartLine /> {notes.length > 1 ? `${notes.length} Notas` : `${notes.length} Nota`}
            </span>
            <button className="btn_add" onClick={handCreate}>
              Criar Nota <FaCirclePlus />
            </button>
          </div>

          {notes.map((note) => (
            <List
              key={note._id}
              info={note}
              selecNota={selecNota}
              active={note === current_node}
              deleteNota={deleteNota}
            />
          ))}
        </Menu>
        <div className="notes-editor" id="notes-editor">
          <Editor note={current_node} updateNota={updateNota} />
        </div>
      </ContainerNotes>
    </>
  );
};

export default Notes;
