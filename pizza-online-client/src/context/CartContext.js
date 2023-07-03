import React, { createContext, useState, useContext } from "react";
import { ApiContext } from '../context/ApiContext';


export const CartContext = createContext({
    items :[],
    getMealQuantity: () => { },
    addOneToCart: () => { },
    removeOneFromCart: () => { },
    deleteFromCart: () => { },
    getMealData: () => { },
    getTotalCost: () => { },
    cartMealsFromScratch: () => {}
});

export function CartProvider({ children }) {
    const [menu, setMenu] = useContext(ApiContext);
    const localStorageCart = JSON.parse(localStorage.getItem("cart"));
    const [cartMeals, setCartMeals] = useState(localStorageCart != null ? localStorageCart : []);
    

    function getMealQuantity(id) {
        const quantity = cartMeals.find(meal => meal.id === id)?.quantity;

        if (quantity === undefined) {
            return 0;
        }

        return quantity;
    }

    function addOneToCart(id) {
        const quantity = getMealQuantity(id);
        if (quantity === 0) {
            setCartMeals(
                [
                    ...cartMeals,
                    {
                        id: id,
                        quantity: 1
                    }
                ]
            )
        } else {
            setCartMeals(
                cartMeals.map(
                    meal =>
                        meal.id == id
                            ? { ...meal, quantity: meal.quantity + 1 }
                            : meal
                )
            )
        }
    }

    function deleteFromCart(id) {
        setCartMeals(
            cartMeals =>
                cartMeals.filter(meal => {
                    return meal.id != id;
                })
        )
    }

    function removeOneFromCart(id) {
        const quantity = getMealQuantity(id);
        if (quantity == 1) {
            deleteFromCart(id);
        } else {
            setCartMeals(
                cartMeals.map(
                    meal =>
                        meal.id == id
                            ? { ...meal, quantity: meal.quantity - 1 }
                            : meal
                )
            )
        }
    }

    function getMealData(id) {
        let mealData = menu.find(meal => meal.id === id);
        return mealData;
    }


    function getTotalCost() {
        let totalCost = 0;
        cartMeals.map((cartItem) => {
            const mealData = getMealData(cartItem.id);
            totalCost += (mealData?.price * cartItem.quantity);
        })

        return totalCost;
    }

    function cartMealsFromScratch() {
        setCartMeals([]);
    }


    const contextValue = {
        items: cartMeals ,
        getMealQuantity,
        addOneToCart,
        removeOneFromCart,
        deleteFromCart,
        getMealData,
        getTotalCost,
        cartMealsFromScratch
    }

    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    )
}




