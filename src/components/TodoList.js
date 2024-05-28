import { Link } from "react-router-dom";
const TodoList = ({todos, subject}) => {
    return(
        <div>
            <h2> {subject} </h2>
            {todos.map((todo)=>(
                <div className="preview" key={todo.id}>
                <Link to={`Todo-details/${todo.id}`}>
                    <h3>{todo.subject}</h3>
                    <p> Created at:{todo.date}</p>
                </Link>
                </div>
            ))}
        </div>
    )
}

export default TodoList;