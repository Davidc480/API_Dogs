// import { useSelector } from "react-redux"
import Card from "../Card/Card"
import styles from "./Cards.module.css";


const Cards = ({dogs, filter})=> {
    let aux = "";
    if(dogs){
        aux = dogs
    }else {
        aux = filter
    }
    return (
        <div className={styles.container}>
        {aux.map(({id, name, life_span, temperament, weight, height, image})=>{
          return <Card 
            id={id}
            name={name}
            life_span={life_span}
            temperament={temperament}
            weight={weight}
            height={height}
            image={image}
          />
        })}
      </div>
      
    )
}

export default Cards;

