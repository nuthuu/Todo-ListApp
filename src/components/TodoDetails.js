import { useHistory ,useParams } from "react-router-dom/cjs/react-router-dom.min";
import UseFetch from "./UseFetch";
import axios from "axios";
import { Button } from "react-bootstrap";

const TodoDetails = () => {
    const {id} = useParams()
    const {data:todos} = UseFetch('http://localhost:4000/blogs/' +id);
    const history = useHistory();

    const handleDelete = (e) => {
        e.preventDefault()

        axios.delete('http://localhost:4000/todos/'+id)
        .then(res=>{
            alert("List deleted")
            history.push('/')
        })
    }

    return(
        <div className="details">
            {todos &&(
                <article>
                    <h3> {todos.subject} </h3>
                    <p> Created at:{todos.date} </p>
                    <div>{todos.list}</div>
                    <Button onClick={handleDelete} variant="danger" className="mt-3" type="submit" > Delete List </Button>
                </article>
            )}

        </div>
    );

}

export default TodoDetails;