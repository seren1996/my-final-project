import { FaHome, FaSignOutAlt, FaSignInAlt, FaRegistered } from "react-icons/fa";
import { BsInfoSquareFill } from "react-icons/bs";
import { BiFoodMenu } from "react-icons/bi";
import { IoLocationSharp } from 'react-icons/io5';
import {GoListUnordered} from 'react-icons/go';

const Home = {
    displayName:"Home",
    to: "/home",
    icon: <FaHome style={{ marginRight: 10 }} />,
};

const About = {
    displayName: "About",
    to: "/about",
    icon: <BsInfoSquareFill style={{ marginRight: 10 }} />,
};

const Registration = {
    displayName: "Registration",
    to: "/registration",
    icon: <FaRegistered style={{ marginRight: 10 }} />,
};

const Login = {
    displayName: "Login",
    to: "/login",
    icon: <FaSignInAlt style={{ marginRight: 10 }} />,
};

const Logout = {
    displayName: "Logout",
    to: "/logout",
    icon: <FaSignOutAlt style={{ marginRight: 10 }} />,
};

const Menu = {
    displayName: "Menu",
    to: "/menu",
    icon: <BiFoodMenu style={{ marginRight :10}} />,
}

const Orders = {
    displayName: "Orders",
    to: "/orders",
    icon: <GoListUnordered style={{ marginRight:10 }}/>
}



export const MenuForRegular = [Home, About, Menu, Logout]; 

export const MenuForGuest = [Home, About, Menu, Login, Registration];

export const MenuForAdmin = [Home, About, Menu, Orders, Logout]; 
