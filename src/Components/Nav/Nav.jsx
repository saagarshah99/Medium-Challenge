import React from 'react';
import "./Nav.scss";

// mapping through array containing list items
const Nav = ({items, logoText}) => {
    return (
        <header className="header flex">
            <h2 className="header__logo flex">{logoText}</h2>

            <ul className="header__nav flex">
                {items.map(item => <li> {item} </li>)}
            </ul>
        </header>
    );
}

export default Nav;