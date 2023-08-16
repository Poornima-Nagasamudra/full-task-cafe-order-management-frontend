import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { startGetMenu } from '../actions/menuAction'

function MenuTable(props){
    const dispatch = useDispatch()

    const menu = useSelector((state) => {
        return state.menu.data
     })
    
    useEffect(() => {
        dispatch(startGetMenu())
    }, [dispatch])

    

    return(
        <div>
            
            <h1>Total Items - {menu.length} </h1>
            <table className="table table-success table-striped" style={{width:"1300px"}}>
                <thead>
                    <tr>
                        <th> name </th>
                        <th> type </th>
                        <th> price </th>
                    </tr>
                </thead>
                <tbody>
                    {menu.map(function(ele){
                        return <tr key={ele._id}>
                            <td> {ele.name}</td>
                            <td> {ele.type} </td>
                            <td> {ele.price} </td>
                        </tr>
                    })}
                    <tr></tr>
                </tbody>
            </table>
        </div>
    )
}

export default MenuTable