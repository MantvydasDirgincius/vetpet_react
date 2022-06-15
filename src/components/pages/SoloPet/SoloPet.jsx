import React from 'react';
import { useParams } from 'react-router-dom';

function SoloPet(props) {
  const { id, name } = useParams();
  console.log(id, name);
  return <h1>{name}</h1>;
}

export default SoloPet;
