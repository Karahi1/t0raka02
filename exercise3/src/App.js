import Products from './Components/Products'
import Search from './Components/Search'
import React from "react";
import { useState } from "react";
import './App.css';
import Monitor from './Images/Monitor.JPG'
import Cartridge from './Images/Cartridge.JPG'
import Pencil from './Images/Pencil.JPG'
import Cables from './Images/Cables.JPG'
import ReceiptPrinter from './Images/ReceiptPrinter.JPG'
import Memory from './Images/Memory.JPG'
import Mouse from './Images/Mouse.JPG'
import FiveStars from './Images/FiveStars.jpg'
import FourStars from './Images/FourStars.JPG'
import OneStar from './Images/OneStar.JPG'

function App() {

    const [ list, setList ] = useState([ 
        {img: Monitor ,name: 'Professional Monitor',description: "Ultra slim profile and contemporary metallic design",price: 139.97, rating: FiveStars},
        {img: Cartridge ,name: 'HP 67XL Ink Cartridge',description: "Original HP Ink is engineered to work with HP printers to provide consistent quality, reliability and value",price: 15.99, rating: FourStars},
        {img: Pencil ,name: 'Apple Pencil',description: "2nd generation brings your work to life",price: 59.99, rating: FiveStars},
        {img: Cables ,name: 'iPhone Charger with Nylon Braided Cable',description: "Durable, perfect lenght, quality copper",price: 9.99, rating: FourStars},
        {img: ReceiptPrinter ,name: 'VEVOR Printer Receipt',description: "Portable printer, fast and clear printing",price: 84.32, rating: OneStar},
        {img: Memory ,name: 'Memory card with adapter',description: "Ideal for smartphones and tablets",price: 16.99, rating:FourStars}, 
        {img: Mouse ,name: 'Wireless Logitech mouse',description: "Easy to use",price: 29.99, rating: FourStars},
    ]);

    const priceDES = () => { 
      let sortedDES = [...list];
      sortedDES.sort((a,b)=>{

        if(a.price > b.price) return -1;
        
        if(a.price < b.price) return 1;
        
      })
        setList(sortedDES)
    }

    const priceASC = () => { //filter button for price ascend
      let sortedASC = [...list];
      sortedASC.sort((a,b)=>{
        if(a.price < b.price) return -1;
        if(a.price > b.price) return 1;
        return 0;
      })
        setList(sortedASC)
    }

    const nameASC = () => { //alphabeticalSort ascend
      let alphaASC = [...list];
      alphaASC.sort((a,b)=>{
        let x = a.name.toUpperCase(),
        y = b.name.toUpperCase();
        return x === y ? 0 : x > y ? 1 : -1;
      })
      setList(alphaASC)
    }
      
    const nameDES = () => { //alphabeticalSort descend
      let alphaDES = [...list]; 
      alphaDES.sort((a,b)=>{   
        let x = a.name.toUpperCase(), 
        y = b.name.toUpperCase();
        return x === y ? 0 : x > y ? -1 : 1;
      })
      setList(alphaDES)
    }
 

  return (
    <div className="App">
      <Search priceDes = {priceDES} priceAsc = {priceASC} nameAsc = {nameASC} nameDes = {nameDES} />  {}
        <div className ="product">
          {list.map(p => <Products img={p.img} name={p.name} description={p.description} price={p.price} rating={p.rating}/>) } {}
      </div>
    </div>
  );
}

export default App;