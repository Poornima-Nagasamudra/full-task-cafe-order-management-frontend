import { useSelector } from "react-redux"


function OrderNotice(props){
    const notice = useSelector((state) => {
        return state.order.notice
    })

    return(
        <div  className='container text-center'  >
            <strong > {notice} </strong>
        </div>
    )
}

export default OrderNotice