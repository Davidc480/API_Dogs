// import { useSelector } from "react-redux"
import { useSelector } from "react-redux"
import Card from "../Card/Card"


const Cards = ()=> {
    
    const dogs = useSelector(state=>state.dogs)
    
    return (
        <div>
            {dogs.map(({id, name, life_span, temperament, weight, height, image})=>{
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

