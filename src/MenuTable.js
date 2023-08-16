import React, {useState, useEffect} from 'react'
import axios from 'axios'
import SearchItem from './SearchItem'

function MenuTable(props){
    const [menu, setMenu] = useState([])
    const[type, setType] = useState('')

    function handleRadio(e){
        const result = e.target.value 
        setType(result)
    }
    
    useEffect(() => {
        axios.get('http://localhost:4002/key/menu')
          .then((response) => {
               const result = response.data 
               setMenu(result)
          })
          .catch((err) => {
              alert(err.message)
          })
    }, [])

    return (
        <div>
            <input type="radio" value="drink" checked={type === "drink"} onChange={handleRadio} />drink
            <input type="radio" value="food" checked={type === "food"} onChange={handleRadio} />food

            <h1> Total Items - {menu.length} </h1>
            <table className="table table-success table-striped" style={{width:"1300px"}}>
                <thead>
                    <tr>
                        <th>Name </th>
                        <th> Type</th>
                        <th>Price </th>
                    </tr>
                </thead>
                <tbody>
                    { menu.map(function(ele){
                        return <tr key={ele._id}>
                            <td> { ele.name} </td>
                            <td> {ele.type} </td>
                            <td>{ele.price} </td>
                        </tr>
                    })}
                </tbody>
            </table>
            <hr/>

            <SearchItem  menu={menu} />
        
        </div>
    )
}

export default MenuTable