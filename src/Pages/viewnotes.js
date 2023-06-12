import React,{useEffect,useState} from 'react';
import DashboardNavbar from '../Components/DashboardNavbar';
import Cookies from 'universal-cookie';
const cookies = new Cookies();


function Viewnotes() {
    const [notes, setNotes] = useState([])
    useEffect(() => {
        const fetchata = async () => {
      
            const response = await fetch('http://127.0.0.1:2000/viewusernotes?username='+cookies.get('username'));
            const data = await response.json();
            setNotes(data['status']);
            console.log(notes);
        }
      
        // Call the function
        fetchata();
     }, []);
    return ( 
        <div>
            <DashboardNavbar />
            <div className='container col-sm-6'>
            <center> <br/>
                <h1>
                    Welcome to <span style={{color:"blue"}}>View Notes</span>
                </h1> <br/>
                <table className='table table-bordered'>
                <tbody>
                {
                    notes.map( (note,key) =>
                        <tr key={key}>
                            <td className='table-data'>{key+1}</td>
                            <td className='table-data'>{note.notes }</td>
                        </tr>
                    )
                }
                </tbody>
            </table>
            </center>
            </div>
        </div>
     );
}

export default Viewnotes;