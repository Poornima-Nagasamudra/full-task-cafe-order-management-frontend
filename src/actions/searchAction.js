import axios from 'axios'

export function startGetSearch(search){
    return (dispatch) => {
       axios.get(`http://localhost:4002/key/menu/search?name=${search}`)
          .then((response) => {
               const result = response.data
               dispatch(getSearch(result))
          })
          .catch((err) => {
              console.log(err)
          })
    }
}

function getSearch(data){
  return {
      type: 'GET_SEARCH',
      payload: data
  }
}


export function  clearSearch(){
            return  {
                type: "CLEAR_SEARCH"
            }
}

export function setSearch(str) {
            return {
                type: 'SET_SEARCH',
                payload: str
            }
}