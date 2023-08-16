const initialState = {
    data : [],
    notice: ''
}

const orderReducer = (state = initialState, action) => {
    switch(action.type){
        case 'SET_ORDER' : {
            return {...state, data:action.payload}
        }

        case 'ADD_ORDER' : {
            return {...state, data:[...state.data, action.payload]}
        }

        case 'REMOVE_ORDER' : {
            return {...state, data: state.data.filter(function(ele){
                return ele._id !== action.payload
            })}
        }

        case 'SET_NOTICE' : {
            return {...state, notice: action.payload}
        }
        

        default : {
            return {...state}
        }
    }
}

export default orderReducer