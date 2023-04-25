import { Link } from "react-router-dom";

const Card = ({id, name, life_span, temperament,weight,height,image})=> {
    return (
        <div>
            <img src={image} alt="" />
            <h2>id: {id}</h2>
            <h2>name: </h2>
            <span> <Link to={`/detail/${id}`}>
             {name}
            </Link></span>
            <h2>life_span: {life_span}</h2>
            <h2>temperament: {temperament}</h2>
            <h2>weight: {weight}</h2>
            <h2>height: {height}</h2>
        </div>
        
    )
}

export default Card;
