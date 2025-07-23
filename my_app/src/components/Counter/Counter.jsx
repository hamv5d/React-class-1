import { useState } from "react";

export default function Counter(){
    const [count, setCount] = useState(0);
    const updtInc = ()=>{
        setCount(count + 1)
    }
    const updtDec = ()=>{
        setCount(count - 1)
    }
    return(
        <>
        <div> {count}</div> <br />
        <button onClick={updtInc} className="btn">Increase</button>
        <button onClick={updtDec} className="btn">Decrease</button>
        </>
    )
}