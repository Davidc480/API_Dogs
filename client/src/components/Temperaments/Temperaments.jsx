import { useSelector } from "react-redux";

function Temperaments({ changeHandler }) {
  const temperaments = useSelector((state) => state.temperaments);

  return (
    <div style={{ maxHeight: "200px", overflow: "auto" }}>
      {temperaments.map((temperament) => (
        <label>
          <input type="checkbox" name="temperament" value={temperament} onChange={changeHandler} />
          {temperament}
        </label>
      ))}
    </div>
  );
}

export default Temperaments;
