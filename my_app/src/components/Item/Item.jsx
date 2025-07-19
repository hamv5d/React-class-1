import './Item.css'
export default function Item({ title }) {

    const update = ()=>{
        console.log(title);   
    }
    return(
        <div>
            {title}
            <button className="btn" onClick={update}>Click Me!</button>
        </div>
    )
}