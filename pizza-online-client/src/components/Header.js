import React from "react";
import NavigationBar from "./NavigationBar";
import {MenuForAdmin, MenuForGuest, MenuForRegular} from "../Helpers/NavigationBarData";

function Header() {
    const user = JSON.parse(localStorage.getItem("user"));

    const navBarToShow = user ?
        user.role == "regular"
            ? MenuForRegular
            : MenuForAdmin
        : MenuForGuest;

    return (
        <>
            <NavigationBar navBarToShow={navBarToShow}></NavigationBar>
        </>
    );
}

export default Header;