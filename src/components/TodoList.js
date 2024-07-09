import { Link } from "react-router-dom";
const TodoList = ({todos, title}) => {
    return(
        <div>
            <h2> {title} </h2>
            {todos.map((todo)=>(
                <div className="preview" key={todo.id}>
                <Link to={`Todo-details/${todo.id}`}>
                    <h3>{todo.subject}</h3>
                    <p> Created For:{todo.date}</p>
                </Link>
                </div>
            ))}
        </div>
    )
}

export default TodoList;