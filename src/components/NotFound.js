import { Link } from "react-router-dom";

const NotFound = () => {


    return(
        <div>
            <h1> 404 </h1>
            <h3>
                The page you are looking for probably does NOT EXIST!💔
            </h3>
            <Link to="/">
                <p> Go Back To Home Page. LUV U 💓 </p>
            </Link>
        </div>
    );
}

export default NotFound;