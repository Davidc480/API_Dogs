import { Link } from "react-router-dom";
import styles from "./Card.module.css";

const Card = ({ id, name, life_span, temperament, weight, height, image }) => {
  return (
    <div className={styles.card}>
      <img src={image} alt="" />
      <div className={styles.info}>
        <h2>id: {id}</h2>
        <h2>name:</h2>
        <span>
          <Link to={`/detail/${id}`}>{name}</Link>
        </span>
        <div className={styles.property}>
          <h2>life span:</h2>
          <span>{life_span}</span>
        </div>
        <div className={styles.property}>
          <h2>temperament:</h2>
          <span>{temperament}</span>
        </div>
        <div className={styles.property}>
          <h2>weight:</h2>
          <span>{weight}</span>
        </div>
        <div className={styles.property}>
          <h2>height:</h2>
          <span>{height}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
