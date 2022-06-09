const initialState  = {
    itineraries: [],
    loader: true,
    comments: []
} 

export function itineraryReducer(state = initialState, action) {
    switch (action.type) {
        case 'CHARGE_ITINERARIES':
            return {
                ...state,
                itineraries: action.payload,
                loader: false
            }
        case 'ADD_COMMENT':
            return{
                ...state,
                comments: action.payload
            }
        case 'DELETE_COMMENT':
            return {
                ...state,
                comment: action.payload
            }
        default:
            return state
    }
}