import { Link, useLocation } from "react-router-dom";

function Header() {

    const page = useLocation();

    return (
        <div className='header'>
            <Link className="link title" to={"/"}><h1>HRnet</h1></Link>
            {
                page.pathname === "/" ? <Link className="link" to={"/employeeList"}>View current employees</Link> : <Link className="link" to={"/"}>Create a new employee</Link>
            }
        </div>
    )
}

export default Header;