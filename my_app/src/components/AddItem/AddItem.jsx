export default function AddItem({onAdd}) {
    let item = ""
    const submitHandler = (event)=>{
        event.preventDefault();
        onAdd(item)
    }
    const inputHandler = (event)=>{
        item = event.target.value
        
    }

  return (
    <>
      <form onSubmit={submitHandler}>
        <div>
          <label>Add the Item here!</label> <br />
          <input onChange={inputHandler} type="text" />
        </div>
        <div>
          <button>Submit Item</button>
        </div>
      </form>
    </>
  );
}
