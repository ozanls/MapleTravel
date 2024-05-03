import React from "react";
import Logo from '../assets/maple.png'

export default function Navbar() {

    const navbarName = "MapleTravel"

    return (
        <nav className="navbar">
            <div className="navbar--logo">
                <img className="navbar--logo--image" src={Logo} />
                <h1 className="navbar--name--image">{navbarName} </h1>
            </div>
            <ul className="navbar--list">
                <li className="navbar--list--item"> <a href="#">Top Destinations</a></li>
                <li className="navbar--list--item"> <a href="#">Events</a></li>
                <li className="navbar--list--item"> <a href="#">Deals</a></li>
                <li className="navbar--list--item"> <a href="#">Blogs</a></li>
            </ul>
        </nav>
    )
}
