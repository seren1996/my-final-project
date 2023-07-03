import React, { useState, useContext, useEffect } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { FaShoppingCart } from "react-icons/fa";
import { CartContext } from '../context/CartContext';
import CartMeal from "../Helpers/CartMeal";
import axios from '../api/axios';
import { ToastContainer, toast } from 'react-toastify';
const AddOrder_URL = '/api/Order/AddOrder';
const AddOrderDetail_URL = '/api/OrderDetail/AddOrderDetail';

function Cart() {
    const cart = useContext(CartContext);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleCartShow = () => setShow(true);
    const mealsCount = cart.items.reduce((sum, meal) => sum + meal.quantity, 0);
    const userId = JSON.parse(localStorage.getItem("user")).id;



    const handlePurchaseClick = async (e) => {
        e.preventDefault();
        try {
            const newOrderRes = await axios.post(AddOrder_URL,
                JSON.stringify({ UserId: userId, OrderDate: new Date() }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            )
            console.log(newOrderRes.data.orderId);
            console.log(cart.items[0].quantity);
            console.log(cart.items[0].id);


            for (let i = 0; i < cart.items.length; i++) {
                const x = await axios.post(AddOrderDetail_URL,
                    JSON.stringify({ OrderId: newOrderRes.data.orderId, Count: cart.items[i].quantity, MealId: cart.items[i].id }),
                    {
                        headers: { 'Content-Type': 'application/json' },
                        withCredentials: true
                    }
                )
            }

            cart.cartMealsFromScratch();
            toast.success('The order was successfully collected !', {
                position: toast.POSITION.TOP_RIGHT
            });

        } catch (err) {
            console.log(err);
        }

    }

    return (
        <>
            <Button style={{ position: "relative", width: "3rem", height: "3rem" }} variant="outline-warning" onClick={handleCartShow} className="rounded-circle">
                <FaShoppingCart />
                <div className='rounded-circle bg-warning d-flex justify-content-center align-items-center' style={{ color: "black", width: "1.5rem", height: "1.5rem", position: "absolute", bottom: 0, right: 0, transform: "translate(25%, 25%)", }}>
                    {mealsCount}
                </div>
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Shopping Cart</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {mealsCount > 0 ?
                        <>
                            {localStorage.setItem("cart", JSON.stringify(cart.items))}
                            <p>Items in your cart:</p>

                            {
                                cart.items.map((item, index) =>
                                (<CartMeal key={index} id={item.id} quantity={item.quantity}></CartMeal>
                                ))
                            }

                            <h2>Total: {cart.getTotalCost().toFixed(2)}</h2>

                            <Button variant="success" onClick={handlePurchaseClick}>
                                Purchase items!
                            </Button>
                        </>
                        :
                        <>
                            {localStorage.removeItem("cart")}
                            <h2>There are no items in your cart!</h2>
                        </>


                    }
                </Modal.Body>
            </Modal>
            <div>
                <ToastContainer />
            </div>
        </>
    );
}

export default Cart;
