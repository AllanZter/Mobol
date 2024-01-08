import styled from "styled-components";


export const DivBotoes = styled.nav`
   ul {
      margin: 0;
      padding: 0;
      list-style: none;
      display: flex;
      align-items: stretch;;
   }

   ul li {
      margin-right: 0px;
   }

   ul li button {
      background-color: transparent;
      color: #fff;
      padding: 10px 20px;
      font-size: 1vw;
      border: none;
     
      cursor: pointer;
      transition: background-color 0.3s ease;
   }

   ul li button:hover {
      text-decoration: blink;
      background: linear-gradient(to right, #5CE1E6 30%, #38B6FF 70%);

   }

   header {
      margin: 0px;
   }
`;

export const DivHeader = styled.div`
   background-color: black;
   position: fixed;
   top: 0;
   left: 0; 
   right: 0; 
   width: 100%;
   z-index: 100;
   padding: 0px;
   display: flex;
   justify-content: space-between;
   align-items: center;
   flex-direction: row;
   color: #fff;

  
  

   .Image{
      width:5%;
      
      cursor: pointer;
      transition: transform 0.2s ease;
   
   }
   .Image:hover{
      transform: scale(1.1); 

   }

  
`;