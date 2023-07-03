import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { CiEdit } from "react-icons/ci";
import axios from '../api/axios';
import { ToastContainer, toast } from 'react-toastify';
const UpdateMeal_URL = '/api/Meal/UpdateMeal/';

function EditMealModal({ title, price, ingredients, id, category }) {
    const [show, setShow] = useState(false);
    const [editedTitle, setEditedTitle] = useState(title);
    const [editedPrice, setEditedPrice] = useState(price);
    const [editedIngredients, setEditedIngredients] = useState(ingredients);
    const handleClose = () => setShow(false);

    const handleShow = () => setShow(true);

    const handleSaveChanges = async (e) => {
        e.preventDefault();
        try {
            setShow(false);
            axios.patch(UpdateMeal_URL + id,
                {
                    Title: editedTitle,
                    ingredients: editedIngredients,
                    Price: editedPrice,
                    Category: category,
                    Id: id,
                }
            ).then(response => console.log(response.data));

            toast.success('Meal successfully updated!', {
                position: toast.POSITION.TOP_RIGHT
            });
        }
        catch (err) {
            alert(err);
        }
    }

    return (
        <>
            <Button variant="light" onClick={handleShow}>
                <CiEdit />
            </Button>

            <Modal centered show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="ControlTitleInput">
                            <Form.Label>Title</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={1}
                                onChange={(e) => setEditedTitle(e.target.value)}
                                value={editedTitle}

                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3" controlId="ControlIngredientsInput">
                            <Form.Label>Ingredients</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={4}
                                onChange={(e) => setEditedIngredients(e.target.value)}
                                value={editedIngredients}

                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3" controlId="ControlPriceInput">
                            <Form.Label>Price</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={4}
                                onChange={(e) => setEditedPrice(e.target.value)}
                                value={editedPrice}

                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleSaveChanges}>
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

export default EditMealModal;