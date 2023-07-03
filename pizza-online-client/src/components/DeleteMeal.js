import React, { useContext, useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Button } from 'react-bootstrap';
import axios from '../api/axios';
import { ApiContext } from '../context/ApiContext';
import { ToastContainer, toast } from 'react-toastify';
const DeleteMeal_URL = '/api/Meal/DeleteMeal/';

function DeleteMeal({ id }) {

    const [menu, setMenu] = useContext(ApiContext);
    const index = menu.findIndex(meal => meal.id == id);

    const deleteMeal = index => {
        const newMenu = [...menu];
        newMenu.splice(index, 1)
        setMenu(newMenu);
    };

    const handleDelete = async (e) => {
        e.preventDefault();
        try {
            axios.delete(DeleteMeal_URL + id, {
                Id: id,
            }
            ).then(response => deleteMeal(index));

            toast.success('Meal successfully deleted!', {
                position: toast.POSITION.TOP_RIGHT
            });
        }
        catch (err) {
            alert(err);
        }
    }

    return (
        <>
            <Button variant="light" onClick={handleDelete}>
                <RiDeleteBin6Line />
            </Button>
            <div>
                <ToastContainer />
            </div>
        </>
    );
}

export default DeleteMeal;