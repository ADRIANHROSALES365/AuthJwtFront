import '../index2.css'
import Register from './Register';
import Login from './Login';
import ShowUsers from './ShowUsers';
import { useState } from 'react';


var Index=()=>{

   const [activeTab,setActiveTab]= useState("A");

  const renderComponent =()=>{
    switch(activeTab){
      case 'A': return <Register/>
      case 'B': return <Login/>
      case 'C': return <ShowUsers/>
      default: return <Index/>
    }
  }

    return (
        <div id='render'>
            <nav>
                <button onClick={()=>{setActiveTab('A')}}>REGISTER</button>
                <button onClick={()=>{setActiveTab('B')}}>LOGIN</button>
                <button onClick={()=>{setActiveTab('C')}}>SHOW USERS</button>
            </nav>
            <main>
                {renderComponent()}
            </main>
        </div>
         
    );
}

export default Index;