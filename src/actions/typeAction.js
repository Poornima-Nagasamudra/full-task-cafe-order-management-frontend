import axios from 'axios'

export function startGetType(type){
    return (dispatch) => {
        axios.get(`http://localhost:4002/key/menu/radio?type=${type}`)
           .then((response) => {
               const result = response.data
               console.log(result)
               dispatch(getType(result))
           })
           .catch((err)=> {
             alert(err.message)
           })
    }
 }
 function getType(data){
    return {
        type: 'GET_TYPE',
        payload: data
    }
 }  