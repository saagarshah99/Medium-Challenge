import React from 'react';
import "./Nav.scss";

const Nav = (props) => {
    const {items, logoText} = props;

    // mapping through array containing list items
    return (
        <header className="header flexbox">
            <h2 className="header__logo flexbox">{logoText}</h2>

            <ul className="header__nav flexbox">
                {items.map(item => <li> {item} </li>)}
            </ul>
        </header>
    );
}

export default Nav;