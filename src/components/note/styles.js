import styled from "styled-components";

export const ContainerNotes = styled.div`
  width: 100%;
  height: calc(100vh - 60px);
  .bm-menu {
    background-color: #ECEBEC !important;
  }
.countNotes{
  padding: 10px 5px 0 10px;
  font-weight: 300;
  font-weight: 700;
  display: flex !important;
  align-items: center !important;
  justify-content: space-between !important;
  span{
    gap: 5px;
  }
  svg{
    margin-right: 5px;
    vertical-align: middle;
  }
  .btn_add{
  padding: 10px;
  color: #FFF;
  background-color: purple;
  cursor: pointer;
  border: none;
  border-radius: 4px;
  display: inline-block;
  display: flex !important;
    align-items: center !important;
    gap: 10px;
  &:hover{
    filter: brightness(0.8);
  }
}
}
.search{
  input{
    width: 100%;
    height: 50px;
    padding: 15px 10px 10px 10px;
    border: 1px solid #ddd;
    font-size: 1.8rem;
    font-weight: 300;
    position: relative;
    &::placeholder{
      color: #00684a;
    }
  }
  a{
    display: inline-block;
      position: absolute;
      top: 10px;
      right: 10px;
      background-color: transparent;
      border: none;
      cursor: pointer;
      &:hover{
        filter: brightness(0.8);
      }
    }
}
.notes-editor{
  height: calc(100vh - 60px);
  .quill{
    height: calc(100vh - 102px)
  }
}
`;
