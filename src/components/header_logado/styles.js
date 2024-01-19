import styled from "styled-components";

export const ContainerBackground = styled.div`
 background-color: #00684A;
`;
export const ContainerHeader = styled.div`
  max-width: 1246px;
  width: 100%;
  margin: 0 auto;
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  img{
    max-width: 150px;
  }
  a{
    color: #FFF;
    font-weight: 300;
    cursor: pointer;
  }
  .info{
    display: flex;
    align-items: center;
    gap: 15px;
    h2{
        font-size: 1.6rem;
        font-weight: 300;
        color: #FFF;
        font-weight: 700;
        span{
          font-weight: 300;
        }
    }
    .infoUserEdit{
      cursor: pointer;
      &:hover{
        filter: brightness(0.8);
      } 
    }
  }
  .linkLogout{
    padding: 5px;
    background-color: #004531;
    border-radius: 3px;
    font-size: 1.3rem;
    text-transform: uppercase;
    display: flex;
    align-items: center !important;
    gap: 5px;
  }
  div{
    display: flex;
    align-items: center;
    gap: 30px;
    .btn-handle{
      cursor: pointer;
      &:hover{
        filter: brightness(0.8);
      }
  }
  }
.menu{
  display: inline-block;
  font-size: 1.6rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  color: #FFF;
  gap: 10px;
  cursor: pointer;
  &:hover{
    filter: brightness(0.8);
  }
}
`;
