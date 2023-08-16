import axios from 'axios'

export function startGetMenu(){
    return (dispatch) => {
        axios.get('http://localhost:4002/key/menu')
           .then((response) => {
               const result = response.data
               dispatch(getMenu(result))
           })
    }
 }
 function getMenu(data){
    return {
        type: 'GET_MENU',
        payload: data
    }
 }

