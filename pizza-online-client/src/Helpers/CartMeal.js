import React, { useContext } from "react";
import Button from 'react-bootstrap/Button';
import { CartContext } from "../context/CartContext";


function CartMeal({id, quantity}) {
    const cart = useContext(CartContext);
    const mealData = cart.getMealData(id);
    const handleDeleteButton = () => {
        cart.deleteFromCart(id);
    }

    return (
        <>
            <h3>{mealData?.title}</h3>
            <p>{quantity} total</p>
            <p>${ (quantity * mealData?.price).toFixed(2) }</p>
            <Button size="sm" onClick={handleDeleteButton}>Remove</Button>
            <hr></hr>
        </>
    )
}

export default CartMeal;