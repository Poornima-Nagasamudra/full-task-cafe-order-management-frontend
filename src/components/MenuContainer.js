import React from 'react'
import MenuType from './MenuType'
// import MenuTable from './MenuTable'
import MenuSearch from './MenuSearch'
import MenuResult from './MenuResult'

function MenuContainer(props){
    

    return (
        <div>
            <h1> MenuContainer</h1>

            <MenuType />
            {/* <MenuTable /> */}
            <MenuSearch />
            <MenuResult />
        </div>
    )
}

export default MenuContainer