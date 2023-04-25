import Cards from "../../components/Cards/Cards";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getDogs } from "../../redux/actions";
import SearchBar from "../../components/SearchBar/SearchBar";






const Home = ()=> {
    
    const dispatch = useDispatch();

useEffect(()=>{
    dispatch(getDogs())
},[dispatch])

    return (
        <>
        <SearchBar />
        <Cards />
        </>
    )
}

export default Home;