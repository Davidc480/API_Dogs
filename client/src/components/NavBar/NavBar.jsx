import { Link, useHistory  } from "react-router-dom";
// import style from "./NavBar.module.css"

const NavBar = ()=> {

    const history = useHistory();

    const handleClick = () => {
      history.push('/home');
      history.go(0);
    };

    return (
       <div >
        <Link onClick={handleClick}>Home</Link>
        <Link to="/create">Create dog</Link>
       </div>
    )
}

export default NavBar;