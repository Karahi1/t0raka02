import './App.css';
import Title from './components/Title'
import ShoppingListContent from './components/ShoppingListContent';

function App() {

  //Haetaan palvelimelta ostoslistan sisältö
  const shoppingListItems = [
    'Maitoa',
    'Leipää',
    'Juustoa'
  ];


  return (
    <div className="App">
      <Title />
      <ShoppingListContent listItems={shoppingListItems}/>  
    
    </div>

  );
}

export default App;
