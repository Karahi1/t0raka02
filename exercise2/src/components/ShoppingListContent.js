import React from 'react'

export default function ShoppingListContent(props) {

    console.log(props);

  return (
    <div>
        <ul>
           {
               props.listItems.map(item => {
                   return <li key={item}>{ item }</li>
               })
           }
        </ul>
    </div>)
}
