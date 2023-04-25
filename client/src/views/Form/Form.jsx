import { useEffect, useState } from "react";
import validateName from "../../helper/validationName";
import validateData from "../../helper/ValidationData";
import validateTemperaments from "../../helper/validationTemperaments";
import Temperaments from "../../components/Temperaments/Temperaments"
import { useDispatch } from "react-redux";
import { getTemperaments } from "../../redux/actions";

const Form = ()=> {

  const dispatch = useDispatch();

  useEffect(()=>{
     dispatch(getTemperaments())
  },[dispatch])

    const [form, setform] = useState({
        name: "",
        life: { min: null, max: null },
        Weight: { min: null , max: null },
        Height: { min: null , max: null },
        temperament: []
    })

    const [errors, setErrors] = useState({
      name: "",
      life: { min: null, max: null },
      Weight: { min: null , max: null },
      Height: { min: null , max: null },
      temperament: []
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
          }
        else {
            
            const { name, value } = event.target;
            const [measure, property] = name.split("_");
            setform({...form, [measure]: {...form[measure],[property]: value}
            })
            validateData({...form, [measure]: {...form[measure],[property]: value}}, errors, setErrors, measure, property)
        }
      }

    const submitHnadler = (event)=>{
      event.preventDefault()
    }

    return (
       <form onSubmit={submitHnadler}>
        <Temperaments changeHandler={changeHandler}/>


            <div>
                <label>Name: </label>
                <input 
                type="text" 
                name="name"
                value={form.name}
                onChange={changeHandler}
                 />
                 {errors.name && <span>{errors.name}</span>}
            </div>
            <div>
                <label>Life span: </label>
                <input 
                type="number" 
                name="life_min" 
                min="1" max="25" 
                placeholder="Minimo" 
                value={form.life.min} 
                onChange={changeHandler}
                 />
                <label> - </label>
                <input 
                type="number" 
                name="life_max"
                min="2" max="25" 
                placeholder="Maximo" 
                value={form.life.max} 
                onChange={changeHandler} 
                 />
                <label> year</label>
            </div>
            <div>
                <label>Weight: </label>
                <input 
                type="number" 
                name="Weight_min"
                min="5" max="180" 
                placeholder="Minimo" 
                value={form.Weight.min} 
                onChange={changeHandler} 
                 />
                <label> - </label>
                <input 
                type="number" 
                name="Weight_max"
                min="6" max="180" 
                placeholder="Maximo" 
                value={form.Weight.max} 
                onChange={changeHandler} />
            </div>
            <div>
                <label>Height: </label>
                <input 
                type="number" 
                name="Height_min"
                min="10" max="80" 
                placeholder="Minimo" 
                value={form.Height.min} 
                onChange={changeHandler} 
                 />
                <label> - </label>
                <input 
                type="number" 
                name="Height_max"
                min="11" max="25" 
                placeholder="Maximo" 
                value={form.Height.max} 
                onChange={changeHandler} 
                 />
            </div>
            <button type="submit">Enviar</button>
       </form>
    )
}

export default Form;