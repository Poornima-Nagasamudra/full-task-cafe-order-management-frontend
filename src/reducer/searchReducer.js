const initialState = {
    data: [],
    search : ''
}

const searchReducer = (state = initialState, action) => {
    switch (action.type){
        case 'GET_SEARCH' : {
            return {...state, data:action.payload            }
        }
        case 'CLEAR_SEARCH' : {
            return{ ...state, data:[], search: ''}
        }

        case 'SET_SEARCH' : {
            return {...state, search: action.payload}
        }
        default : {
            return {...state}
        }
    }
}

export default searchReducer