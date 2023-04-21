import { Link } from "react-router-dom";
// import style from "./NavBar.module.css"

const NavBar = ()=> {
    return (
       <div >
        <Link to="Home">Home</Link>
        <Link to="/create">Create dog</Link>
       </div>
    )
}

export default NavBar;