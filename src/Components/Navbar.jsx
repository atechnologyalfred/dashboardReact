import { Link } from "react-router-dom";
function Navbar ({children, image}){
    return (
        <nav>
        <Link to="/"><h1>{image}</h1></Link>
        <div>
            {children}
        </div>
        </nav>
    )
}
export default Navbar;