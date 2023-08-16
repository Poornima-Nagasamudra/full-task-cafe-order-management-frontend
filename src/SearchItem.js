import React, {useState, useEffect} from 'react'
import axios from 'axios'

function SearchItem(props){
    const[search, setSearch] = useState('')
    const[find, setFind] = useState([])
    const[order, setOrder] = useState([])
    const[notice, setNotice] = useState('')
    

    function handleSearch(e){        
        const result = e.target.value
        setSearch(result)        
    }

    useEffect(() =>{
        if(search.length >= 3)
             axios.get(`http://localhost:4002/key/menu/search?name=${search}`)
               .then((response) => {
                   const result = response.data
                   console.log('search', result)
                   setFind(result)
               })
               .catch((err) => {
                  console.log(err)
               })
    }, [search])
       
    function handleOrder(id){   
        axios.post(`http://localhost:4002/key/order`, { menuId : id})
           .then((response) => {
               const result = response.data
               console.log('order', result)
               setOrder([...order, result])
           })
           .catch((err) =>{
              alert(err.message)
           })
    }
        
    useEffect(()=>{
          axios.get('http://localhost:4002/key/order')
            .then((response) => {
                const result = response.data 
                console.log('order list',result)
                setOrder(result)
            })
    },[])

    function findSum(){
        let sum = 0
        order.forEach(function(ele) {
          sum = sum + ele.menuId.price
        })
        return sum 
    }

    function handleStatus(id){    
        axios.put(`http://localhost:4002/key/order/${id}` )    
                .then((response) => {
                    const result = order.filter((ele) =>{
                         return ( ele._id !== id)                       
                    })
                    console.log('booked order', result)
                    setOrder(result)
                })
    }

   return (
        <div>
            <form >
                <input type="search" value={search}  placeholder="search by name" onChange={handleSearch} />
            </form>

             <ul className="list-group" >
                { find.map(function(ele){
                    return <li key={ele._id} className="list-group-item" > {ele.name} 
                          <button onClick={() => {handleOrder(ele._id)}} className="btn btn-primary shadow p-3 mb-5 bg-body-tertiary rounded"> Add</button> </li>
                })}
            </ul> 
            
            <ul>
                {order.map(function(ele, i){
                    return <li key={ele._id}> {ele.menuId.name} 
                          { i === 0 && <input type="checkbox" onClick={() => {handleStatus(ele._id)}} /> } 
                          </li>
                })}
            </ul>

            {/* <strong> {notice} </strong> */}
            
            <hr/>

            <h1 className="d-block  p-8 text-bg-dark bottom-50 end-50 " style={{width: "250px"}}>Total Amount {findSum()} </h1>
            
        </div>
    )
}

export default SearchItem