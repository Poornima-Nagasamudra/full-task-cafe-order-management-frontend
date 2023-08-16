import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startAddOrder } from '../actions/orderAction'

function MenuResult(props){
    const dispatch = useDispatch()

    const search = useSelector((state) => {
         return state.search.data
    })

    function handleButton(id){
        const formData = {
            menuId : id
        }
        dispatch(startAddOrder(formData))
    }

    return(
        <div>
            <ul className="list-group" >
                {search.map(function(ele){
                    return <li key={ele._id} className="list-group-item" >  
                           {ele.name} 
                            <button onClick={() => {handleButton(ele._id)}}> Add </button> 
                            </li>
                })}
            </ul>
             
        </div>
    )
}

export default MenuResult