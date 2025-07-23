import { useState } from 'react';
import './Item.css'
export default function Item({ title }) {
    const bool = 'false';
    const [name, state]= useState(title)
    const update = ()=>{
        state('Update')   
    }
    return(
        <div>
            {name}
            <button className={bool?"btn":"fbtn"} onClick={update}>Click Me!</button>
        </div>
    )
}