import React from 'react';
import {Link} from 'react-router-dom';
import './ColorList.css'
const ColorList = ({colors}) => {
    
    return (
        <div className="ColorList">
            <ul>
    {colors.map(color=>(<Link to={`/colors/${color.name}`}
    key={color.name}>
        <li key={color.name}>{color.name}
        </li>
        </Link>))}
            </ul>
        </div>
    )

}
export default ColorList;