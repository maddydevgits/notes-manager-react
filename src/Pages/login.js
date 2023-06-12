import React,{ useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from '../Components/Navbar';
import Cookies from 'universal-cookie';
const cookies = new Cookies();


const styles={
    heading1: {
      color: "blue"
    }
}

function Login() {
    const [enteredPassword, setPassword] = useState('');
    const [enteredMobile, setMobile] = useState('');

    const passwordChangeHandler = (event) => {
        setPassword(event.target.value);
    };

    const mobileChangeHandler = (event) => {
        setMobile(event.target.value);
    };
    const submitHandler = (event) => {
        event.preventDefault();

        //reset the values of input fields
        setPassword('');
        setMobile('')

        fetch('http://127.0.0.1:2000/verifylogin?'+'password='+enteredPassword+'&username='+enteredMobile)
        .then(
          (response) => (response.json())
         ).then((response)=> {
          if (response.status === 'success') {
            cookies.set('username', enteredMobile);
            document.getElementById('res').innerHTML='Credentials are Correct';
            document.getElementById('err').innerHTML='';
            window.location.replace('/dashboard');
          } else if(response.status=== 'failure'){
            document.getElementById('err').innerHTML='Credentials are In-Correct';
            document.getElementById('res').innerHTML='';
          }
    });

        console.log(enteredMobile,enteredPassword);
    };
    return ( 
        <div>
            <Navbar />
            <Container className='col-sm-3'> <br/>
                <h1 style={styles.heading1}>Login Form</h1> <br/>
                <Form onSubmit={submitHandler}>

                    <Form.Group  controlId="form.Mobile">
                        <Form.Label>Mobile</Form.Label>
                        <Form.Control type="text" value={enteredMobile} onChange={mobileChangeHandler} placeholder="Enter Mobile" required/>
                    </Form.Group><br/>
                    
                    <Form.Group  controlId="form.Password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" value={enteredPassword} onChange={passwordChangeHandler} placeholder="Enter Password" required/>
                    </Form.Group> <br/>
                    
                    <Button type='submit'>Login</Button>
                </Form> <br/>
                <span style={{color:"red"}} id="err"></span>
                <span style={{color:"green"}} id="res"></span>
            </Container> 
        </div>
     );
}

export default Login;