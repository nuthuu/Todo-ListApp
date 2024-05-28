import TodoList from "./TodoList";
import UseFetch from "./UseFetch";

//creation of component
const Home = () => {
    const {data:todos} = UseFetch('http://localhost:4000/todos')
    return(
        <div className="home">
            {todos && <TodoList todos={todos} title="All todos"/>}
        </div>
    );
}
// export Component
export default Home;