import React, { useState } from "react";

export default function Inputs(props) {
   
    return <div>
      <button onClick={ () => props.Button(1)}>Add milk</button>
      <button onClick={ () => props.Button(2)}>Add coffee</button>
      <button onClick={ () => props.Button(3)}>Add bread</button>
      <button onClick={ () => props.Button(4)}>Add ham</button>
  
    </div>;
  }
