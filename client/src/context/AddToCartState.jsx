import React,{useState} from 'react'
import AddToCartContext from './AddToCartContext'

const AddToCartState = (props) => {
    const [cartItems, setcartItems] = useState(0)
    const [bill, setBill] = useState(0)

const BillCalculation = (quantity, price)=>{
    const totalPrice = quantity * price; 
    
    setcartItems(cartItems + quantity); 
    setBill(bill + totalPrice); 
}

  return (
    <AddToCartContext.Provider value={{cartItems, bill, BillCalculation}}>
        {props.children}
    </AddToCartContext.Provider>
  )
}

export default AddToCartState