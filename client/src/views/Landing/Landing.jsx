import { Link } from "react-router-dom";
import styles from "./Landing.module.css"


const Landing = ()=> {
    return (
      <div  className={styles.background}>
        <Link to="/home">
            <button className="btn">Ir a Home</button>
        </Link>

      </div>
    )
}

export default Landing;