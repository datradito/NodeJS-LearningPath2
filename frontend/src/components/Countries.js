import { useEffect, useState } from 'react'

const Countries = (props) => {
    const [countries, setCountries] = useState([])
    useEffect ( () => { 
        fetch('https://restcountries.eu/rest/v2/all')
        .then(respuesta => respuesta.json())
        .then(data => { setCountries(data)})
    },[])
    return(
            countries.map( (country, index) => {
                return ( 
                    <option className="text-center" key={index} value={country.name}>{country.name}</option>)
            })
        )
}

export default Countries