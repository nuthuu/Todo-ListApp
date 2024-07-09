import { useHistory ,useParams } from "react-router-dom";
import UseFetch from "./UseFetch";
import axios from "axios";
import { Button } from "react-bootstrap";

const TodoDetails = () => {
    const {id} = useParams()
    const {data:todos} = UseFetch('http://localhost:4000/todos/' +id);
    const history = useHistory();

    const handleDelete = (e) => {
        e.preventDefault()

        axios.delete('http://localhost:4000/todos/'+id)
        .then(res=>{
            alert("List Deleted")
            history.push('/')
        })
    }

    return(
        <div className="details">
            {todos &&(
                <article>
                    <h3> {todos.subject} </h3>
                    <p> Created For:{todos.date} </p>
                    <div>{todos.details}</div>
                    <Button onClick={handleDelete} variant="danger" className="mt-3" type="submit" > Delete List </Button>
                </article>
            )}

        </div>
    );

}

export default TodoDetails;