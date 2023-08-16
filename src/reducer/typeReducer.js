const initialState = {
    data : []
}

const typeReducer = (state= initialState, action ) => {
    console.log('action', action.payload)
    switch(action.type){
        
        case 'GET_TYPE' : {
            return {...state, data:action.payload}
        }

        default : {
            return {...state}
        }
    }
}

export default typeReducer