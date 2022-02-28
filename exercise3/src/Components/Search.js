export default function Search(props) {

    return (  
    <div className="searchBar">
  
      
          <button className="searchButton" onClick={ ()=>props.nameDes()}>Names Decending order</button>
          <button className="searchButton" onClick={ ()=>props.nameAsc()}>Names Ascending order</button>
     
          <div className="searchBarItems">     
            <div>Search products</div>
              <form>
                <input type="text" />
              <button>Push button</button>
            </form>
          </div>   
  
          <button className="searchButton" onClick={ ()=>props.priceDes()}>Price Decending order</button>
          <button className="searchButton" onClick={ ()=>props.priceAsc()}>Price Ascending order</button>
      </div>
    );
  }