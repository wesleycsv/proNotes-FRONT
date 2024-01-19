import React from "react";
import moment from "moment";
import { FaDeleteLeft } from "react-icons/fa6";

import { ContainerList } from "./styles";

const List = (props) => {
  return (
    <>
      <ContainerList
        onClick={() => props.selecNota(props.info._id)}
        $active={props.active}
      >
        <h1 className="titleNota">
          {props.info.title.replace(/(<([^>]+)>)/gi, "").substring(0, 15) +
            "..."}
          <span className="dataNota">
            {moment(props.info.created_at).format("DD/MM")}
          </span>
        </h1>
        <div>
          <p className="descricaoNota">
            {props.info.body.replace(/(<([^>]+)>)/gi, "").substring(0, 30) +
              "..."}
          </p>
          <FaDeleteLeft
            size={30}
            color="#333"
            onClick={() => props.deleteNota(props.info._id)}
          />
        </div>
      </ContainerList>
    </>
  );
};

export default List;
