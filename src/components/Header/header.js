import React from "react";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { DivBotoes, DivHeader } from "./styled";




export const HeaderFixo = () =>{





    
  
const Logo = require('../../Mobol.png');
   

    
    return (
<div>
    <DivHeader>
    
      
    <img className="Image" src={Logo} alt="Logo" />                            
    
    <DivBotoes>
    <nav>          
        <ul>              
            <li ><button >BEM-VINDO</button></li>
            <li ><button  >QUEM SOMOS</button></li>                                       
            <li ><button  >COMO FUNCIONA?</button></li>
                      
            <li ><button  > CONTATO</button></li>
            <li ><button  ><FontAwesomeIcon icon={faUser } style={{ marginRight: '10px' }}/>ENTRAR</button></li>
        </ul>                 
    </nav>
         
    
    </DivBotoes>
    </DivHeader>
    </div>
    )
} 