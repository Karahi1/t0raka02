import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const element = <FontAwesomeIcon icon={faBars} />


export default function Title() {
  return (
    <div className="upperBar">   
        <div className="mainTitle">HELSINGIN SANOMAT</div>
        <div>Etusivu</div>
        <div>Uutiset</div>
        <div>Lehdet</div>
        <div>Asiakaspalvelu</div>
        <div className='orderButton'>Tilaa</div>
        <div>Kirjaudu</div>
        <div className='valikko'>Valikko {element}</div>
        
      


      </div>
  )
  
}
