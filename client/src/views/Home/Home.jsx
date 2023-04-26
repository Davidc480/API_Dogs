import Cards from "../../components/Cards/Cards";
import styles from "./Home.module.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDogs, getTemperaments } from "../../redux/actions";
import SearchBar from "../../components/SearchBar/SearchBar";
import Temperaments from "../../components/Temperaments/Temperaments";
import FilterApiBdd from "../../components/FilterApiBdd/FilterApiBdd";
import FiltradoTemperaments from "../../helper/FiltradoTemperaments";



const Home = ()=> {

    const dogs = useSelector(state=> state.dogs)

    const [filter, setFilter] = useState(dogs)

    const [currentPage, setCurrentPage] = useState(1);
    const [elementsPerPage, setElementsPerPage] = useState(8);

    const totalPages = Math.ceil(filter.length / elementsPerPage);

    const getElements = () => {
        const startIndex = (currentPage - 1) * elementsPerPage;
        const endIndex = startIndex + elementsPerPage;
        return filter.slice(startIndex, endIndex);
      };


      


    

    const [temp, setTemp] = useState({
        temperament: []
    })

    useEffect(() => {
        const getFilteredDogs = async () => {
          if (Array.isArray(dogs) && temp.temperament.length > 0) {
            const filtered = await FiltradoTemperaments([...dogs], temp.temperament);
            setFilter(filtered);
          } else {
            setFilter(dogs);
          }
        }
        getFilteredDogs();
      }, [temp.temperament, dogs]);
      
      
    
    
    const dispatch = useDispatch();
    
    

    useEffect(()=>{
            dispatch(getDogs());
            dispatch(getTemperaments());
    }, [dispatch, temp])

    
    
const changeHandler = (event)=>{
    const value = event.target.value;
    const checked = event.target.checked;
    const tempArr = checked
      ? [...temp.temperament, value]
      : temp.temperament.filter((temp) => temp !== value);
    setTemp((prevTemp) => ({ ...prevTemp, temperament: tempArr }))
}

const format = () => {
    window.location.reload();
  };

const changeHandlerApiBdd = (event)=>{
    const value = event.target.value
    const checked = event.target.checked;

    if(value === "Dogs Api" && checked){
        const dogsApi = dogs.filter((dog)=> !isNaN(dog.id))
        setFilter(dogsApi)

    } else if (value === "Dogs Bdd" && checked){
        const dogsApi = dogs.filter((dog)=> isNaN(dog.id))
        setFilter(dogsApi)
    } else if (value === "A_Z" && checked){
        const dogA_Z = dogs.slice().sort(function(a, b) {
            if (a.name > b.name) {
              return 1;
            }
            if (a.name < b.name) {
              return -1;
            }
            return 0;
          })
        setFilter(dogA_Z)
    } else if (value === "Z_A" && checked){
        const dogZ_A = dogs.slice().sort((a, b)=> {
            if (a.name > b.name) {
              return 1;
            }
            if (a.name < b.name) {
              return -1;
            }
            return 0;
          }).reverse()
        setFilter(dogZ_A)
    } else if (value === "Z_A" && checked){
        const dogZ_A = dogs.slice().sort((a, b)=>{
            if (a.name > b.name) {
              return 1;
            }
            if (a.name < b.name) {
              return -1;
            }
            return 0;
          }).reverse()
        setFilter(dogZ_A)
    } else if (value === "M_peso_m" && checked){
        console.log("jj");
        const sortedDogs = dogs.slice().sort((a, b) => {
            const weightA = a.weight.split(" - ")[1];
            const weightB = b.weight.split(" - ")[1];
            return weightB - weightA;
          });
        setFilter(sortedDogs)

    } else if (value === "m_peso_M" && checked){
        const sortedDogs = dogs.slice().sort((a, b) => {
            const weightA = a.weight.split(" - ")[1];
            const weightB = b.weight.split(" - ")[1];
            return weightA - weightB;
          });
          setFilter(sortedDogs)
    } else {
        setFilter(dogs)
    }
}

    return (
        <div className={styles.background}>
        <button onClick={format}>Refresh</button>
        <SearchBar />
        
        <Temperaments changeHandler={changeHandler}/>
        <FilterApiBdd changeHandlerApiBdd={changeHandlerApiBdd} />
        <Cards dogs={getElements()} />
        <button
        disabled={currentPage === 1}
        onClick={() => {
        setCurrentPage(currentPage - 1);
        window.scrollTo(0, 0);
      }}
        >
         Prev
        </button>
        <button disabled={currentPage === totalPages} onClick={() => {
        setCurrentPage(currentPage + 1);
        window.scrollTo({top: 0, behavior: 'smooth'}); // Agregar esta línea
      }}>Next</button>
        <div>Page {currentPage} of {totalPages}</div>
      </div>

       
    )
}

export default Home;