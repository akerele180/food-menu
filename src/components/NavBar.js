import React, {useContext} from 'react'
import {FoodContext} from '../FoodContext'
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar';

function NavBar() {
  const { foodType, setFoodType, handleEvent } = useContext(FoodContext)
  // console.log(foodType)

  return (
    <>
      <nav>
        <ul className='text-center mt-3 mb-1 list-inline'>
          <li><button 
            value='' 
            className='bg-transparent border-0 p-0'
            onClick={handleEvent}
          >
            All
          </button></li>
          <li><button 
            value='breakfast' 
            className='bg-transparent border-0 p-0'
            onClick={handleEvent}
          >
            Breakfast
          </button></li>
          <li><button 
            value='lunch' 
            className='bg-transparent border-0 p-0'
            onClick={handleEvent}
          >
            Lunch
          </button></li>
          <li><button 
            value='shakes' 
            className='bg-transparent border-0 p-0'
            onClick={handleEvent}
          >
            Shakes
          </button></li>
        </ul>
      </nav>
    </>
  )
}

export default NavBar;