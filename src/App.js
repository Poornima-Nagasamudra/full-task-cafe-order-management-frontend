import React from 'react'
import MenuContainer from './components/MenuContainer';
import OrderConatiner from './components/OrderContainer';

function App(props) {
  return (
    <div >
        <h1> <center>Cafe Order Management</center></h1>

        <MenuContainer/>
        <OrderConatiner />
    </div>
  );
}

export default App;
