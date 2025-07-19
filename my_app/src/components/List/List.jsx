import Item from '../Item/Item'
import './List.css'

export default function List(){
    const arr = ['Car', 'cycle', 'truck', 'horse', 'hammad'];
    const map = arr.map((item, index) => <Item key={index} title={item}/>)
    return(
        <>
        <div className='list'>
            {map}
        </div>
        </>
        
    )
}