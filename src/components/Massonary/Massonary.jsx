import React from 'react'
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import './Massonary.css'

function Massonary() {
  return (
    <div className='MassonaryWrapper'>
        <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}>
                <Masonry>
                    <img className='Mimg' src="./r1.png" alt="" />
                    <img className='Mimg' src="./h3.jpeg" alt="" />
                    <img className='Mimg' src="./r3.png" alt="" />
                    <img className='Mimg' src="./h1.jpeg" alt="" />
                    <img className='Mimg' src="./h2.jpeg" alt="" />
                    <img className='Mimg' src="./r2.png" alt="" />
                </Masonry>
        </ResponsiveMasonry>
    </div>
  )
}

export default Massonary