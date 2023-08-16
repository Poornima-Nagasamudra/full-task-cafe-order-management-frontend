import { useDispatch, useSelector } from "react-redux"
import { startCompleteOrder } from "../actions/orderAction"


function OrderItem(props){
    const dispatch = useDispatch()

    const order  = useSelector((state) => {
        return state.order.data
    })


    function findSum(){
        let sum = 0
        order.forEach(function(ele) {
          sum = sum + ele.menuId.price
        })
        return sum 
    }

    function handleInput(id){
        dispatch(startCompleteOrder(id))
    }

    return(
        <div>
            <ul>
                {order.map(function(ele, i){
                    return <li key={ele._id}>  {ele.menuId.name} 
                           { i === 0 && <input type="checkbox"  onClick={() => {handleInput(ele._id)}} />} </li>
                })}
            </ul>

            <h1 className="d-block  p-8 text-bg-dark bottom-50 end-50 " style={{width: "250px"}}>Total Amount {findSum()} </h1>

            
        </div>
    )
}

export default OrderItem