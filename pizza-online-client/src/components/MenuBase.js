import React from 'react';
import MealCard from "./MealCard";

function MenuBase({items}) {
    return <>
        <div className="section-center">
            {items?.map((menuItem, index) => {
                const { id, title, ingredients, price, category } = menuItem;
                return (
                    <MealCard key={index} id={id} title={title} ingredients={ingredients} price={price} category={category} />
                );
            })}
        </div>
    </>

}

export default MenuBase;

