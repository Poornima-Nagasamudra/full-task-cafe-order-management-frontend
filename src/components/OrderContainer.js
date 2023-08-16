import React, {useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { startGetOrder } from '../actions/orderAction'
import OrderItem from './OrderItem'
import OrderNotice from './OrderNotice'

function OrderConatiner(props){
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(startGetOrder())
    },[dispatch])

    return(
        <div>
           <OrderNotice />
            <OrderItem />
        </div>
    )
}

export default OrderConatiner