import axios from "axios"
import {Url} from "../../components/ApiUrl"

const citiesActions = {
    getCities: () => {
        return async (dispatch) => {
            const res = await axios.get(`${Url}/cities`)
            dispatch({type: 'CHARGE_CITIES', payload: res.data.respuesta})
        }
    },
    searchCities: (value) => {
        return async (dispatch) => {
            dispatch({type: 'SEARCH_CITIES', payload: value})
        }
    },
    getCityId: (id) => {
        return async (dispatch) => {
            const res = await axios.get(`${Url}/cities/`+ id)
            dispatch({type: 'CITY_ID', payload: res.data.respuesta})
        }
    }
}

export default citiesActions