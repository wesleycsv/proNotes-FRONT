import styled from "styled-components";


export const Container = styled.div`
max-width:1246px;
width:100%;
margin: 0 auto;
padding: 15px;
background-color: #FBFBFB;
height: calc(100vh - 100px);
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
form{
    max-width: 500px;
    width: 100%;

    .formTitle{
        margin-bottom: 40px;
        text-align: center;
        h1{
   
        }
        span{
            display: inline-block;
            font-size: 1.6rem;
            color: #333;
        }
    }
    div{
        margin-bottom: 15px;
    }
    label{
        display: block;
        font-weight: 300;
        margin-bottom: 8px;
        display: flex;
        align-items: center;
        gap: 5px;
        svg{
            margin-top: -3px;
        }
    }
    input{
        width: 100%;
        border: 1px solid #CCC;
        padding: 10px;
        border-radius:5px;
    }
    .btnAtulizaDados{
        background-color: #004531;
        color: #FFF;
        cursor: pointer;
        &:hover{
            filter: brightness(0.8);
        }
    }
}
.sucesso{
    display: block;
    color: #004531;
    text-align: center;
    margin-top: 10px;
}
.error{
    display: block;
    color: red;
    text-align: center;
    margin-top: 10px;
}
.delete{
    display: flex;
    text-align: center;
    margin-top: 50px !important;
    flex-direction: column;
    span{
        display: block;
        margin-bottom: 10px;
    }
    button{
        width: fit-content;
        margin: 0 auto;
        color: #FFF;
        background-color: red;
        border: none;
        padding: 10px 20px;
        border-radius: 5px;
        cursor: pointer;
        &:hover{
            filter: brightness(0.8);
        }
    }
}
`