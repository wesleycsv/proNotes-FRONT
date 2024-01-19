import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fbfbfb;
`

export const FormContent = styled.div`
  max-width: 500px;
  width: 100%;
  padding: 20px;
  h1 {
    font-weight: 700;
    display: block;
    margin-bottom: 20px;
    text-align: center;
  }
  label {
    display: block;
    font-size: 1.8rem;
    font-weight: 300;
    margin-bottom: 6px;
    display: flex;
    align-items: center;
    gap: 8px;
    svg {
      margin-top: -2px;
    }
  }
  div {
    margin-bottom: 20px;
    input {
      width: 100%;
      padding: 13px;
      border-radius: 5px;
      border: 1px solid #ccc;
    }
    input[type="submit"] {
      background-color: #034030;
      color: #fff;
      padding: 10px;
      font-size: 2rem;
    }
  }
  .btn-group {
    display: flex;
    gap: 30px;
    .fazerLogin {
      flex: 1;
      cursor: pointer;
      &:hover {
        filter: brightness(0.5);
      }
    }
  }
  .imgLogo{
    margin: 0 auto;
    margin-bottom: 30px;
  }
`;


export const ContainerError = styled.div`
text-align: center;
color: red;
font-weight: 300;
`