import React from 'react'


export default function Card_collection() {
  return (
    <div className='collection'>

      <div className='text-collection'>

        <div className='Vetement'>
          <h1>Vêtements</h1>
          <ul className='Vetement_ul'>
            <li>Pantalon</li>
            <li>Gilet</li>
            <li>Veste</li>
            <li>Pull</li>
          </ul>
        </div>
        <div className='Accessoire'>
          <h1>Accessoires</h1>
          <ul className='Accesoire_ul'>
            <li>Cravatte</li>
            <li>Chaussures</li>
            <li>Ceinture</li>

          </ul>
        </div>
      </div>
    </div>
  )
}
