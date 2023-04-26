import { Link, useHistory } from "react-router-dom";
import styles from "./NavBar.module.css";

const NavBar = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push("/home");
    history.go(0);
  };

  return (
    <div className={styles.navbar}>
      <Link onClick={handleClick} className={styles.navbarLink}>
        Home
      </Link>
      <Link to="/create" className={styles.navbarLink}>
        Create dog
      </Link>
    </div>
  );
};

export default NavBar;
