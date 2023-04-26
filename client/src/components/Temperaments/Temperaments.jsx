import { useSelector } from "react-redux";
import style from "./Temperaments.module.css";

function Temperaments({ changeHandler }) {
  const temperaments = useSelector((state) => state.temperaments);

  return (
    <div className={style["component-container"]}>
      {temperaments.map((temperament) => (
        <label key={temperament}>
          <input
            type="checkbox"
            name="temperament"
            value={temperament}
            onChange={changeHandler}
          />
          {temperament}
        </label>
      ))}
    </div>
  );
}

export default Temperaments;
