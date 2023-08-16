import React, {useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {  startGetType } from '../actions/typeAction'

function MenuType(props){
    let result = []
    const dispatch = useDispatch()

    const type = useSelector((state)=>{
        return state.type.data
    })


    const[select, setSelect] = useState('')

     result = type.map((ele)=>{
        return ele.type
     })

     useEffect(() => {
        dispatch(startGetType(select))
    }, [select, dispatch])

    function handleType(e){   
        setSelect(e.target.value)    
    }


    return(
        <div>
            <div>
                <input type="radio" id="drink" className='radio1'  value="drink"  checked = {type === "drink"} onChange={handleType}  /> drink 

                <input type="radio" id="food" className='radio2' value="food" checked={ type === "food"} onChange={handleType} />food              
            </div>
            <h1>Total Items - {type.length} </h1>

            <div>
               {result.includes('drink') ? (
               <table className="table table-success table-striped" style={{width:"1300px"}}>
                    <thead>
                        <tr>
                            <th> name</th>
                            <th>type</th>
                            <th>price</th>
                        </tr>
                    </thead>
                    <tbody>
                        { type.map(function(ele){
                            return <tr>
                                <td>{ele.name} </td>
                                <td> {ele.type} </td>
                                <td>{ele.price} </td>
                            </tr>
                        })}
                    </tbody>
               </table>)  : (
                 <table className="table table-success table-striped" style={{width:"1300px"}}>
                    <thead>
                        <tr>
                            <th> name</th>
                            <th>type</th>
                            <th>price</th>
                        </tr>
                    </thead>
                    <tbody>
                        { type.map(function(ele){
                            return <tr>
                                <td>{ele.name} </td>
                                <td> {ele.type} </td>
                                <td>{ele.price} </td>
                            </tr>
                        })}
                    </tbody>
                 </table>
               )}
            </div>

        </div>
        

    )
}


export default MenuType