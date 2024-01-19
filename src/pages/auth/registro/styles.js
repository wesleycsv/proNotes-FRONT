import styled from "styled-components";


export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`;
export const ContainerRegistro = styled.div`
  flex: 1;
  background-color: #fbfbfb;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ContainerInfo = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 40px;
  background-color: #034030;
  color: #CCC;
  h1{
    font-size: 6rem;
    line-height: 100%;
    font-weight: 300;
    text-align: center;
    margin: 40px 0;
    span{
      font-weight: 700;
    }
  }
  p{
    margin-top: 30px;
    font-weight: 300;
  }
  img{
    margin-bottom: 40px;
    margin: 0 auto;
  }
  .redeSociais{
    margin-top: 30px;
    display: flex;
    gap: 15px;
    justify-content: center;
  }
`;
