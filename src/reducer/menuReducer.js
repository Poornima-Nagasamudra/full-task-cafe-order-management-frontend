const initialState = {
    data: []
}

const menuReducer = (state = initialState, action) => {
    switch(action.type){
        case 'GET_MENU' : {
            return {...state, data:action.payload}
        }

        default : {
            return {...state}
        }
    }
}

export default menuReducer