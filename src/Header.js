import React from 'react';
import {Link} from 'react-router-dom';
import "./Header.css"

const Header = ()=>{
    return (
        <div className="Header">
            <Link to="/colors"><h1>Color Factory</h1></Link>
            <Link to="/colors/new">Add Color</Link>
        </div>
    )
}
export default Header;