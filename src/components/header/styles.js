import styled from "styled-components";

export const ContainerBackground = styled.div`
  background-color: #00684a;
`;
export const Container = styled.div`
  max-width: 1246px;
  width: 100%;
  margin: 0 auto;
  padding: 15px;
`;

export const ContentHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    max-width: 150px;
  }
  a {
    color: #fff;
    font-size: 1.9rem;
  }
`;

export const Ul = styled.ul`
  display: flex;
  gap: 20px;
  margin: 10px 0;

.linkHeaderRegistrar{
  font-weight: 300;
  font-size: 1.5rem;
}
.linkHeaderFazerLogin{
  padding: 10px;
  border-radius: 3px;
  font-weight: 300;
  background-color: #034030;
  font-size: 1.5rem;
  &:hover{
    color:#034030;
    background-color: #FFF;
  }
}
`;

export const ContentHero = styled.div`
  margin-top: 40px;
  text-align: center;
  color: #111;
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
