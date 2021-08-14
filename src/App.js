import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import React, {useState} from 'react'
import Section from './components/Section';
import {FoodContext} from './FoodContext';

function App() {
  const [foodType, setFoodType] = useState('');
  // console.log(foodType); 
  
  const handleEvent = (event)=> {
    setFoodType(event.target.value);
  }

  return (
    <div className="App">
      <FoodContext.Provider value={{foodType, setFoodType, handleEvent}}>
        <Header/>
        <Section/>
      </FoodContext.Provider> 
    </div>
  );
}

export default App;
