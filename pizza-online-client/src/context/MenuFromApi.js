import React, { useState, useEffect } from 'react';
import {ApiContext}  from '../context/ApiContext';
import axios from '../api/axios';
const GetMeal_URL = '/api/Meal/GetMeal';

function MenuFromApi({ children }) {
    const [menu, setMenu] = useState([]);

    useEffect(() => {
      axios
        .get(GetMeal_URL)
        .then((res) => {
          setMenu(res.data)
        })
        .catch((error) => {
          console.log(error)
        })
    }, [])
    return (
      <ApiContext.Provider value={[menu, setMenu]}>
        {children}
      </ApiContext.Provider>
    )
  }

  export default MenuFromApi