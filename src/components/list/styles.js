import styled from "styled-components";

export const ContainerList = styled.div`
  background-color: #fbfbfb;
  padding: 10px;
  box-shadow: 0 10px 20px -10px rgba(0, 0, 0, 0.2);
  margin: 10px 0;
  transition: all 0.1s linear;
  cursor: pointer;
  background-color: ${(props) => props.$active && "#03966c !important"};
  .titleNota {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 1.7rem;
    font-weight: 700;
    margin-bottom: 8px;
    color: ${(props) => props.$active ? "#FFF !important" : "#00684a"};
    .dataNota {
      font-weight: 300;
      font-size: 1.3rem;
      padding: 5px;
      border-radius: 3px;
      background-color: #00684a;
      color: #fff;
    }
  }
  .descricaoNota {
    font-weight: 300;
    color: ${(props) => props.$active ? "#FFF !important" : "#00684a"}
  }

  &:hover {
    background-color: #03966c;
    border-left: 6px solid #00684a;
    .dataNota {
      background-color: #fff;
    }
    .titleNota {
      color: #fff !important;
      .dataNota {
        color: #00684a;
      }
    }
    .descricaoNota{
      color: #FFF;
    }
  }
  div{
    display:flex;
    align-items: center;
    justify-content: space-between;
  }

`;
