const initialState = {
    list: []
}

export default function jobs(state = initialState, action) {

    console.log(action, state)

    const { type, payload } = action

    switch(action.type) {
        case 'GET_JOBS': 
            return {
                ...state,
                list: [action.payload]
            }
            case 'SET_ERROR':
                return {
                  ...state,
                  error: action.payload,
                }
          
              case 'SET_LOADING':
                return {
                  ...state,
                  loading: action.payload,
                }
        default: 
            return state
    }

}


