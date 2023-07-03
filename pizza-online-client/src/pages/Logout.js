import React from "react";



function Logout() {
    localStorage.removeItem("user");
    localStorage.removeItem("cart");
    location.pathname = "/home";


    return <>
    </>;
}

export default Logout;
