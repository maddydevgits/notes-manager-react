import React,{ useState }  from 'react';
import DashboardNavbar from '../Components/DashboardNavbar';
import { Form, Button, Container } from 'react-bootstrap';
import Cookies from 'universal-cookie';
const cookies = new Cookies();

const styles={
    heading1: {
      color: "blue"
    }
}

function Insertnotes() {
    const [enteredNotes, setNotes] = useState('');

    const notesChangeHandler = (event) => {
        setNotes(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();
        setNotes('')
        //reset the values of input fields
        console.log(cookies.get('username')); 
        console.log(enteredNotes);
        fetch('http://127.0.0.1:2000/insertnotes?'+'notes='+enteredNotes+'&owner='+cookies.get('username'))
        .then(
          (response) => (response.json())
         ).then((response)=> {
          if (response.status === 'success') {
            document.getElementById('res').innerHTML='Inserted Notes Successfully';
            document.getElementById('err').innerHTML='';
          } else if(response.status=== 'failure'){
            document.getElementById('err').innerHTML='Inserting Notes Failure';
            document.getElementById('res').innerHTML='';
          }
        });
    };
    return ( 
        <div>
            <DashboardNavbar />
            <Container className='col-sm-6'> <br/>
                <h1 style={styles.heading1}>Insert Notes</h1> <br/>
                <Form onSubmit={submitHandler}>

                    <Form.Group  controlId="form.Mobile">
                        <Form.Control as="textarea" cols={1000} rows={4}
                              required
                              type="text"
                              placeholder="Enter Notes"
                              value={enteredNotes}
                              onChange={notesChangeHandler} />
                    </Form.Group><br/>
                    
                    <Button type='submit'>Insert Notes</Button>
                </Form> <br/>
                <span style={{color:"red"}} id="err"></span>
                <span style={{color:"green"}} id="res"></span>
            </Container> 
        </div>
     );
}

export default Insertnotes;