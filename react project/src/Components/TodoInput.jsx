function TodoInput({task,setTask,addTodo}){
    return(
        <>
        <input type="text" value={task} onChange={(e)=>setTask(e.target.value)} />
        <button onClick={addTodo}>Add</button>
        </>
    )
}
export default TodoInput;