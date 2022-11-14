import React from 'react';
import s from './Header.module.css'
import NavMenu from "../navMenu/NavMenu";

const Header = () => {
    return (
        <div className={s.header}>
            <NavMenu/>
        </div>
    );
};

export default Header;