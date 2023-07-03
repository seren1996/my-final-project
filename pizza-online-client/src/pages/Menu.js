import React, { useContext, useEffect, useState } from 'react';
import '../styles/Menu.css';
import MenuBase from "../components/MenuBase";
import Categories from "../components/Catergories";
import { ApiContext } from '../context/ApiContext';
import AddMealModal from '../components/AddMealModal';


function Menu() {

  const [menu, setMenu] = useContext(ApiContext);
  const [filteredMenuItems, setFilteredMenuItems] = useState(menu);
  const categories = ['all', ...new Set(menu.map(item => item.category))];
  const user = JSON.parse(localStorage.getItem("user"));
  const [showAddButton, setShowAddButton] = useState(false);
  
  const filterItems = category => {
    if (category == 'all') {
      setFilteredMenuItems(menu);
      return;
    }

    const newItems = menu.filter((item) => item.category === category);
    setFilteredMenuItems(newItems);
  };

  useEffect(() => {
      (user != null && user.role == "admin") ?
        setShowAddButton(true)
        :
        setShowAddButton(false)
  }, [user])

  return <>
    <main>
      <section className="menu section">

        {
          showAddButton && <div className="add-container"> <AddMealModal /> </div>
        }

        <div className="title">
          <h2>our menu</h2>
          <div className="underline" />
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <MenuBase items={filteredMenuItems} />
      </section>
    </main>

  </>
}







export default Menu;