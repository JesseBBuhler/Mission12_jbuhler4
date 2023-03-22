import React from 'react';
//import Teams from './Teams.json';
import Card from './Card.tsx';

function CardList() {
  
  const TeamFile = require('./Teams.json');
  const Teams = TeamFile.teams
  
  return (
    <div className="CardList">
        {Teams.map(team => <Card school={team.school} city={team.city} state={team.state} mascot={team.name}/>)}
    </div>
  );
}

export default CardList;