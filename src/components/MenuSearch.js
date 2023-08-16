import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startGetSearch, setSearch } from '../actions/searchAction'

function MenuSearch(props){
    const dispatch = useDispatch()

    // const[search, setSearch] = useState('')
    const search = useSelector((state) => {
        return state.search.search
    })

    function handleSearch(e){
        // setSearch(e.target.value)
        dispatch(setSearch(e.target.value))
    }

    useEffect(() => {
        if(search.length >= 3 ){
          dispatch(startGetSearch(search))
        }
    },[dispatch,search])

    return (
        <div>
             <input type="search" value={search} placeholder="search by name" onChange={handleSearch} />
        </div>
    )
}

export default MenuSearch