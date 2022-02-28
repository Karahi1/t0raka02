import React from 'react';

export default function Content(props) {
  return <div className="listaSisalto" >
          <ul className="lista">
            {props.Content.map((item,index )=> {
              return <li className="sisal" key={index}>{item.qty} {item.name}</li>
            }
            )}

          </ul>

  
  </div>

  
  ;
}