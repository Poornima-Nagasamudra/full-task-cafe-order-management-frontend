import axios from 'axios'
import { clearSearch } from './searchAction'

export function startGetOrder(){
    return (dispatch) => {
        axios.get('http://localhost:4002/key/order')
        .then((response) => {
             const result = response.data
             dispatch(setOrder(result))
        })
        .catch((err) => {
            console.log(err)
        })
    }
}

function setOrder(data){
    return{
        type: 'SET_ORDER',
        payload: data
    }
}

export function startAddOrder(formData){
      return (dispatch) => {
          axios.post(`http://localhost:4002/key/order`, formData)
             .then((response) => {
                 const result = response.data
                 dispatch(addOrder(result))
                 dispatch(clearSearch())
             })
             .catch((err) => {
                console.log(err.emssage)
             })
      }
}

function addOrder(data){
    return {
        type: 'ADD_ORDER',
        payload: data
    }
}

export function startCompleteOrder(id){
    return (dispatch, getState) => {
        axios.put(`http://localhost:4002/key/order/${id}`)
          .then((response) => {
              const result = response.data
              console.log('result', result)
              console.log(getState())
                const menuItem = getState().order.data.find(function(ele){
                    console.log('ele', ele._id)
                  
                    return ele._id === result._id
                })
                console.log('menuItem', menuItem)
              const msg = `The ${menuItem.menuId.name} is complete`
              console.log(result)
              dispatch(removeOrder(result._id))
              dispatch(setNotice(msg))
              setTimeout(() =>{
                    dispatch(setNotice(''))
              }, 3000)
          })
          .catch((err) => {
            console.log(err.message)
          })
    }
}

function removeOrder(id){
    return {
        type: 'REMOVE_ORDER',
        payload: id
    }
}

function setNotice(msg){
    return {
        type: 'SET_NOTICE',
        payload: msg
    }
}




