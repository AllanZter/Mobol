import React from 'react';


import {Card} from './styled';

const Cards = () => {
  

  const servicosData = [
    {
      title: 'LANDING PAGE',
      
      image: require('../../Mobol.png'),
    },
    {
      title: 'SITE',
     
      image: require('../../Mobol.png'),
    },

    {
      title: 'CONSULTORIA',
      
      image: require('../../Mobol.png'),
    },
    {
      title: 'ANÚNCIOS ',
      
      image: require('../../Mobol.png'),
    },
  
    

    
  ];

  return (
    <Card>
        
    <div className="servicos-container">
      
      {servicosData.map((servico, index) => (
        <div key={index} className="card">
        {servico.image && <img src={servico.image} alt={servico.title} />}
          <h2>{servico.title}</h2>
          <p>{servico.description}</p>
          <a className="btn-saiba-mais" onClick={servico.click}>SAIBA MAIS</a>
        </div>
      ))}


    </div>
    </Card>
    
  );
};

export default Cards;