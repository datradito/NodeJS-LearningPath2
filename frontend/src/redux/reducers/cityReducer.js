const initialState = {
    cities: [],
    filter: [],
    loader: true
}
export function cityReducer(state = initialState, action) {
    switch (action.type) {
        case 'CHARGE_CITIES':
            return {
                ...state,
                cities: action.payload,
                filter: action.payload,
                loader: false
            }
        case 'SEARCH_CITIES':
            return{
                ...state,
                filter: state.cities.filter(item => item.cityName.toUpperCase().indexOf(action.payload.toUpperCase().trim()) === 0)
            }
        case 'CITY_ID':
            return{
                ...state,
                cities: action.payload
            }
        default:
            return state
    }
}