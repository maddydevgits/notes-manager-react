import React from 'react';
import DashboardNavbar from '../Components/DashboardNavbar';

function Dashboard() {
    return ( 
        <div>
            <DashboardNavbar />
            <center> <br/>
                <h1>
                    Welcome to <span style={{color:"blue"}}>Notes Manager Dashboard</span>
                </h1>
            </center>
        </div>
     );
}

export default Dashboard;