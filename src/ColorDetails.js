import React from 'react';
import { useParams, Redirect } from 'react-router-dom';

const ColorDetails=({colors})=>{
    const {color} = useParams()
    const colorValue=colors.find((c)=>c.name==color)
    if(!colorValue){
        return <Redirect to="/colors"/>
    }
    return (
        <div style={{width:"100vw", height: "100vh", backgroundColor:colorValue.color}}>
            <h1 style={{backgroundColor:"white"}}>{color}</h1>


        </div>
    )
}
export default ColorDetails;