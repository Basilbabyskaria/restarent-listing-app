import React from 'react'
import { useParams } from 'react-router-dom';

function Viewrest() {
  const urlparams=useParams();
  console.log(urlparams);

  return (
    <div>Viewrest</div>
  )
}

export default Viewrest