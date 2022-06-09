import axios from "axios"
import { Toast } from "reactstrap"
import {Url} from "../../components/ApiUrl"

const itinerariesActions = {
    getItineraries: (id) => {
        return async (dispatch) => {
            const res = await axios.get(`${Url}/itineraries/` + id)
            dispatch({type: 'CHARGE_ITINERARIES', payload: res.data.itinerary})
        }
    },
    addComment:(content, id, token) => {
        return async (dispatch) => {
            try {
                const res = await axios.post( `${Url}/comments/` , {content, id, token}, {
                    headers: {
                        Authorization: `Bearer ${token}` 
                    }
                })
                dispatch({type: 'ADD_COMMENT', payload: res.config.data})
                return true
            } catch(error){
                Toast.error('try again later!')
            }
        }
    },
    deleteComment: (id, idcomment, token) => {
        return async(dispatch) => {
            try {
                const res = await axios.put( `${Url}/comments/delete`, {id, idcomment, token}, {
                    headers: {
                        Authorization: `Bearer ${token}` 
                    }
                })
                dispatch({type: 'DELETE_COMMENT', payload: res.config.data})
            } catch(error){
                Toast.error('try again later!')
            }
        }
    },
    modComment: (value, idcomment, id, token) => {
        return async (dispatch) => {
            try{
                const res = await axios.put( `${Url}/comments/`, {value, idcomment, id, token}, {
                    headers: {
                        Authorization: `Bearer ${token}` 
                    }
                })
                dispatch({type: 'ADD_COMMENT', payload: res.config.data})
            } catch(error){
                Toast.error('try again later!')
            }
        }
    },
    like:(id, token) => {
        return async(dispatch) => {
            try {
                const res = await axios.post(`${Url}/likes/`, {id, token}, {
                    headers: {
                        Authorization: `Bearer ${token}` 
                    }
                })
                dispatch({type: 'LIKE', payload: res.data})
            } catch(error){
                Toast.error('try again later!')
            }
        }
    },
    dislike:(id, token) => {
        return async(dispatch) => {
            try {
                const res = await axios.post( `${Url}/dislike/`, {id, token}, {
                    headers: {
                        Authorization: `Bearer ${token}` 
                    }
                })
                dispatch({type: 'LIKE', payload: res.data})
            } catch(error){
                Toast.error('try again later!')
            }
        }
    }
}

export default itinerariesActions