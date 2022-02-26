import React from 'react';
import kuva from './korona.jpg';

export default function Content(props) {
  return (
    <div className='mainContent'>
      <div className='newsFeed'>
      <div className='mainHeadline'>Koronavirus</div>
      <img src={kuva} />
      <pun>
        <li>HS seuraa</li>
      </pun> 
      
      <header>
        <h2 className='sin'>Päivittyvä seuranta</h2>
        <span2> | STM: Parasetamolia tai deksametasonia</span2>
        
        <span3>   sisältävien lääkkeiden myyntiä rajoitetaan</span3>
      </header>
      
        
        
      
        

      </div>

      <div className='topNews'>
        <div className='headline'>Luetuimmat</div>
        
       
           {
            props.topNews.map(uutinen => {
              return <mus>
                <li key={uutinen}>{ uutinen }</li>
              </mus>
            })
          }
        
          
        

      </div>
    </div>


  )
}
