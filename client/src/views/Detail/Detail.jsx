import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getDog } from "../../redux/actions";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux"
import Card from "../../components/Card/Card";

const Detail = ()=> {

  const dispatch = useDispatch();
  const {id} = useParams()
  const dog = useSelector(state=>state.dogs)

  useEffect(()=>{
      dispatch(getDog(id))
  },[dispatch, id])

  return (
    <div>
      <Card {...dog}/>
    </div>
  )
}

export default Detail;
