const FilterApiBdd = ({changeHandlerApiBdd})=>{
    return(
        <div>
          <label>
          <input type="checkbox" name="temperament" value="Dogs Api" onChange={changeHandlerApiBdd} />
          Dogs Api
        </label>
        <label>
          <input type="checkbox" name="temperament" value="Dogs Bdd" onChange={changeHandlerApiBdd} />
          Dogs Base de datos
          </label>
        <label>
          <input type="checkbox" name="temperament" value="A_Z" onChange={changeHandlerApiBdd} />
          A - Z
          </label>
        <label>
          <input type="checkbox" name="temperament" value="Z_A" onChange={changeHandlerApiBdd} />
          Z - A
          </label>
        <label>
          <input type="checkbox" name="temperament" value="M_peso_m" onChange={changeHandlerApiBdd} />
          M_peso_m
          </label>
        <label>
          <input type="checkbox" name="temperament" value="m_peso_M" onChange={changeHandlerApiBdd} />
          m_peso_M
          </label>
          </div>
    )
}

export default FilterApiBdd;