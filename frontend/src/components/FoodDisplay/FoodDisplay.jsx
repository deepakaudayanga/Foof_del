import React, { useContext } from 'react'
import "./FoodDisplay.css";
import { StoreContext } from '../../context/StoreContext'
import { food_list } from '../../assets/assets';
import FoodItem from '../FoodItm/FoodItem';

const FoodDisplay = (category) => {

    const {food_list} = useContext(StoreContext)

  return (
    <div className='food-dispay' id='food-dispay'>
      <h2>Top dish near </h2>
      <div className="food-display-list">
        {food_list.map((item,index)=>{
              return <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price}  image={item.image}/>
        })}
      </div>
    </div>
  )
}

export default FoodDisplay
