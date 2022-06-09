
import { Link } from "react-router-dom"

//componente funcional sencillo para home y redireccion a cities
export const Banner = () => {
  
    return (
      <div className="bg-r">
        <h3 className="bg-white text-center p-2" >Welcome everybody</h3>
        
      <div className="formulario">
        <img className="w-25 rounded-circle" src="./assets/banner.jpg" alt=""/>
        <div className=" d-flex align-items-center">
        <Link className="p-5 rounded-pill bg-white text-dark" to="/cities">See Cities</Link>

        </div>
      </div>

      </div>)
}