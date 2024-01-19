import styled from "styled-components";

export const Container = styled.div`
  max-width: 1246px;
  width: 100%;
  margin: 0 auto;
  padding: 15px;
`;

export const ContentHero = styled.div`
  margin-top: 40px;
  text-align: center;
  color: #011717;
  h1 {
    font-size: 10rem;
  }
  p{
    font-size: 2.rem;
    margin-top: 2rem;
    font-weight: 300;
    span{
      font-weight: 700;
      display: block;
      font-size: 4rem;
    }
  }
  button{
    display: block;
    margin: 0 auto;
    margin-top: 40px;
    font-size: 2rem;
    border-radius: 5px;
    background-color: #00684A;
    padding: 20px 27px;
    border: none;
    color: #FFF;
    }
`;
