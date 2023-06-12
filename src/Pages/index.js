import React from 'react';
import Navbar from '../Components/Navbar';
function home() {
    return ( 
        <div>
            <Navbar />
            <center> <br/>
                <h1>
                    Welcome to <span style={{color:"blue"}}>Notes Manager</span>
                </h1>
            </center>
        </div>
     );
}

export default home;