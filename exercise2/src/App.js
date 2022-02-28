import Content from './Components/Content';
import Inputs from './Inputs';
import './App.css';
import { useState } from 'react';





function App() {



  const [benneItems ,setBenneItems] = useState([
    { 

      id:1,
      qty: 0,
      name: "milk"

    },
    { 

      id:2,
      qty: 0,
      name: "coffee"

    },
    { 

      id:3,
      qty: 0,
      name: "bread"

    },
    { 

      id:4,
      qty: 0,
      name: "ham"
      
    }

  ]);




const onItemAddition = (idCheck) =>{

var randomNumber = Math.floor(Math.random() *10) +1;

let newbenneItems = [...benneItems];

let itemClickedIdex = newbenneItems.findIndex(i => idCheck === i.id);

if(itemClickedIdex != -1) {

  let newElement = {...newbenneItems[itemClickedIdex]}
  newElement.qty = newElement.qty + randomNumber;
  newbenneItems[itemClickedIdex] = newElement;

  setBenneItems(newbenneItems);
}

}



  return (
    <div className="App">
    <Content Content={benneItems} />
    <Inputs Button= { onItemAddition } />

    </div>
  );
}

export default App;