import React, {useContext} from 'react';
import {FoodContext} from '../FoodContext'
import menu from '../data';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Section.css';

function Section() {
  const { foodType } = useContext(FoodContext);
  let newFood = [];

  return (
    <section className='container-md p-0'>
      {
        menu.map((item)=>{
          // console.log(typeof(menu))
          const {desc, id, title, price, category, img } = item;
          
          if (category!==foodType) {
            newFood.push(category)
            return (
              console.log('here', newFood)
            )
          } 
          
            return (
              <article key={id} className='row my-5'>
                <div className='col-xl-5'>
                  <img className='image mb-3' src={img} alt={title}/>
                </div>
                <div className='col-xl-7'>
                  <div className='row pb-2'>
                    <h3 className='col-9 text-start'>{title}</h3>
                    <h3 className='col-3 text-end'>${price}</h3>
                  </div>
                  <p>{desc}</p>
                </div>
              </article>
            )
   
        })

      }
      
    </section>
  )
}

export default Section;