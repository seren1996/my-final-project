import { Button, Form, Modal } from 'react-bootstrap';
import React, { useState, useContext } from "react";
import { VscAdd } from "react-icons/vsc";
import axios from '../api/axios';
import { ApiContext } from '../context/ApiContext';
import { ToastContainer, toast } from 'react-toastify';
const AddMeal_URL = '/api/Meal/AddMeal';

function AddMealModal() {

    const [show, setShow] = useState(false);
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState(0);
    const [ingredients, setIngredients] = useState("");
    const handleClose = () => { setShow(false); console.log(menu); };
    const handleShow = () => setShow(true);
    const [menu, setMenu] = useContext(ApiContext);

    const addMeal = meal => {
        const newMenu = [...menu, meal]
        setMenu(newMenu);
    };


    const handleSaveChanges = async (e) => {
        e.preventDefault();
        try {
            setShow(false);
            axios.post(AddMeal_URL,
                JSON.stringify({ Title: title, Category: category.toLowerCase(), Price: price, ingredients: ingredients }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            ).then(response => { const meal = response.data; addMeal(meal) });

            toast.success('New meal successfully added!', {
                position: toast.POSITION.TOP_RIGHT
            });
        }catch (err) {
            toast.error(err, {
                position: toast.POSITION.TOP_RIGHT
            });
    }
}

return (
    <>
        <Button variant="light" onClick={handleShow}>
            <VscAdd />
        </Button>

        <Modal centered show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Add</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="ControlTitleInput">
                        <Form.Label>Title</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={1}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </Form.Group>


                    <Form.Group className="mb-3" controlId="ControlCategoryInput">
                        <Form.Label>Category</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={1}
                            onChange={(e) => setCategory(e.target.value)}
                        />
                    </Form.Group>


                    <Form.Group
                        className="mb-3" controlId="ControlIngredientsInput">
                        <Form.Label>Ingredients</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={4}
                            onChange={(e) => setIngredients(e.currentTarget.value)}
                        />
                    </Form.Group>

                    <Form.Group
                        className="mb-3" controlId="ControlPriceInput">
                        <Form.Label>Price</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={1}
                            onChange={(e) => setPrice(e.target.value)}
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="warning" onClick={handleSaveChanges}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
        <div>
            <ToastContainer />
        </div>
    </>
);
}

export default AddMealModal;

