import { useEffect, useState } from "react";
import validateName from "../../helper/validationName";
import validateData from "../../helper/ValidationData";
import validateTemperaments from "../../helper/validationTemperaments";
import Temperaments from "../../components/Temperaments/Temperaments"
import { useDispatch } from "react-redux";
import { getTemperaments, createDog } from "../../redux/actions";
import formatDataForm from "../../helper/FormatDataForm";
import styles from "./Form.module.css"

const Form = ()=> {

  const dispatch = useDispatch();

  useEffect(()=>{
     dispatch(getTemperaments())
  },[dispatch])

    const [form, setform] = useState({
        name: "",
        life: { min: null, max: null },
        weight: { min: null , max: null },
        height: { min: null , max: null },
        temperament: [],
        image: ""
    })

    const [errors, setErrors] = useState({
      name: "",
      life: { min: null, max: null },
      weight: { min: null , max: null },
      height: { min: null , max: null },
      temperament: [],
      image: ""
  })
  
  const changeHandler = (event) => {
        if (event.target.name === "name"){
            const property = event.target.name
            const value = event.target.value
            setform({...form, [property]: value})
            validateName({...form, [property]: value}, errors, setErrors)
          } else if (event.target.name === "temperament") {
            const value = event.target.value;
            const checked = event.target.checked;
            const tempArr = checked
            ? [...form.temperament, value]
              : form.temperament.filter((temp) => temp !== value);
            setform((prevForm) => ({ ...prevForm, temperament: tempArr }));
            validateTemperaments({ ...form, temperament: tempArr }, errors, setErrors);
          } else if (event.target.name === "image"){
            const property = event.target.name
            const value = event.target.value
            setform({...form, [property]: value})
          }
        else {
          
            const { name, value } = event.target;
            const [measure, property] = name.split("_");
            setform({...form, [measure]: {...form[measure],[property]: value}
            })
            validateData({...form, [measure]: {...form[measure],[property]: value}}, errors, setErrors, measure, property)
        }
      }
      
      const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(createDog(formatDataForm(form)));
        window.location.reload();
      };
      
      
    const submitHnadler = (event)=>{
      event.preventDefault()
    }
    
    return (
     
      <form onSubmit={submitHnadler} className={styles.form}>
        <Temperaments changeHandler={changeHandler} />

  
        <div className={styles.container}>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={changeHandler}
            className={styles.input}
            />
        </div>
  
        <div className={styles.container}>
          <label>Life span:</label>
          <input
            type="number"
            name="life_min"
            min="1"
            max="25"
            placeholder="Minimo"
            value={form.life.min}
            onChange={changeHandler}
            className={styles.input}
            />
          <label>-</label>
          <input
            type="number"
            name="life_max"
            min="2"
            max="25"
            placeholder="Maximo"
            value={form.life.max}
            onChange={changeHandler}
            className={styles.input}
          />
          <label>year</label>
        </div>
  
        <div className={styles.container}>
          <label>Weight:</label>
          <input
            type="number"
            name="weight_min"
            min="5"
            max="180"
            placeholder="Minimo"
            value={form.weight.min}
            onChange={changeHandler}
            className={styles.input}
            />
          <label>-</label>
          <input
            type="number"
            name="weight_max"
            min="6"
            max="180"
            placeholder="Maximo"
            value={form.weight.max}
            onChange={changeHandler}
            className={styles.input}
          />
        </div>
  
        <div className={styles.container}>
          <label>Height:</label>
          <input
            type="number"
            name="height_min"
            min="10" max="80" 
            placeholder="Minimo" 
            value={form.height.min} 
            onChange={changeHandler} 
            />
                <label> - </label>
                <input 
                type="number" 
                name="height_max"
                min="11" max="25" 
                placeholder="Maximo" 
                value={form.height.max} 
                onChange={changeHandler} 
                />
            </div>
            <div>
            <label>image: </label>
                <input 
                type="text" 
                name="image"
                value={form.image}
                onChange={changeHandler}
                />
            </div>
            <button type="submit" onClick={handleSubmit}>Enviar</button>
              <h1>Errores</h1>
              <li>
                {/* <ul> {errors.name} </ul> */}
                {/* <ul> {errors.life} </ul> */}
                {/* <ul> {errors.weight} </ul> */}
                {/* <ul> {errors.height} </ul> */}
                {/* <ul> {errors.temperament} </ul> */}
              </li>

       </form>

    )
}

export default Form;