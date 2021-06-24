

const initialState = {
    list: []
}

export default function fav(state = initialState, action) {

    console.log(action, state)

    const { type, payload } = action

    switch(type) {
        case 'ADD_TO_FAV': 
            return {
                ...state,
                list: [...state.list, payload]
            }
        case 'REMOVE_FROM_FAV':
            return {
                ...state,
                list: state.list.filter(company => company !== payload)
            }
        default: 
            return state
    }

}

