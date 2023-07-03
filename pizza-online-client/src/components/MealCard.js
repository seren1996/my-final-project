import React, { useContext, useState, useEffect } from "react";
import { Button, Col, Form, Row, Stack } from 'react-bootstrap';
import { CartContext } from '../context/CartContext';
import EditMealModal from "./EditMealModal";
import DeleteMeal from './DeleteMeal';

function Card({ id, title, price, ingredients, category }) {
    const cart = useContext(CartContext);
    const mealQuantity = cart.getMealQuantity(id);
    const user = JSON.parse(localStorage.getItem("user"));
    const [disabledAddBtn, setDisabledAddBtn] = useState(false);

    const handleAddClick = () => {
        cart.addOneToCart(id);
    }

    const handleMinusClick = () => {
        cart.removeOneFromCart(id);

    }

    const handleRemoveClick = () => {
        cart.deleteFromCart(id);
    }

    useEffect(() => {
        (user == null) ?
            setDisabledAddBtn(true)
            :
            setDisabledAddBtn(false)
    }, [user])

    return <>
        <div>
            <article key={id} className="menu-item">
                <div className="item-info">
                    <header>
                        <h4>{title}</h4>
                        <h4 className="price">${price}</h4>
                    </header>
                    <p className="item-text">{ingredients}</p>
                </div>
            </article>
            {(user != null && user.role == "admin") ?
                <Stack direction="horizontal" gap={2}>
                    <div className="ms-auto">
                        <EditMealModal title={title} ingredients={ingredients} price={price} id={id} category={category} />
                    </div>
                    <div>
                        <DeleteMeal id={id} />
                    </div>
                </Stack>
                :
                <>
                    {mealQuantity > 0 ?
                        <>
                            <div className="plusminusform-container">
                                <Form as={Row}>
                                    <Form.Label column="true" sm="6">In Cart : {mealQuantity}</Form.Label>
                                    <Col sm="6">
                                        <Button variant="warning" sm="6" className='mx-2' onClick={handleAddClick}>+</Button>
                                        <Button variant="warning" sm="6" className='mx-2' onClick={handleMinusClick}>-</Button>
                                    </Col>
                                </Form>
                            </div>

                            <div className="btn-center">
                                <Button variant="danger" className='mx-2' onClick={handleRemoveClick}>Remove From Cart</Button>
                            </div>

                        </>
                        :
                        <div className="btn-center">
                            <Button variant="warning" onClick={handleAddClick} disabled={disabledAddBtn}>Add To Cart</Button>
                        </div>
                    }
                </>
            }
        </div>
    </>
}

export default Card;

