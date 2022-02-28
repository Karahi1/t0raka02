import React from 'react';

export default function Products(props) {
    return (
        <div className="Items">
          <img src={props.img}/> 
            <div><h1>{ props.name }</h1></div>
              <div className="ItemsDesc">{props.description}</div>
              <div>${ props.price }</div>
            <img src={props.rating}/>
        </div>
        );
      }