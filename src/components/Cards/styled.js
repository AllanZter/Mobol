import styled, { keyframes } from "styled-components";

const pulseAnimation = keyframes`
  0%, 100% {
    box-shadow: 0 4px 8px #00FD93;
  }
  50% {
    box-shadow: 0 4px 8px #0CC0DF;
  }
`;

export const Card = styled.div`
  .servicos-container {
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;
    padding: 20px;
  }

  .card {
    display: flex;
    flex-direction: column;
    width: 20%;
    align-items: center;
    margin: 20px;
    padding: 15px;
    border: none;
    border-radius: 0px;
    box-shadow: 0 4px 8px #00FD93;
    animation: ${pulseAnimation} 1.5s infinite; /* Ajuste a duração conforme necessário */
    transition: box-shadow 0.3s; /* Adiciona uma transição suave durante a mudança de sombra no hover */
  }

  .card:hover {
    box-shadow: 0 4px 8px #0CC0DF;
  }

  h2 {
    text-align: center;
    font-size: 2vw;
    
    color: #0CC0DF;
  }

  p {
    color: #0CC0DF;
  }

  .btn-saiba-mais {
    display: inline-block;
    padding: 8px 16px;
    margin-top: 10px;
    text-decoration: none;
    background: linear-gradient(to right, #5CE1E6 30%, #38B6FF 70%);
    font-size: 1vw;
    color: #fff;
    border-radius: 4px;
    transition: background-color 0.3s;
    cursor: pointer;
  }

  

  img {
    width: 70%;
    border: none;
    border-radius: 0%;
  }

  @media screen and (max-width: 600px) {
    .card {
      width: 100%;
    }
  }
`;
