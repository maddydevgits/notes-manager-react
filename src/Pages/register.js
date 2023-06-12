import React,{ useState }  from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import Navbar from '../Components/Navbar';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

const styles={
    heading1: {
      color: "blue"
    }
}

function Register() {
    const [enteredEmail, setEmail] = useState('');
    const [enteredName, setName] = useState('');
    const [enteredOrg, setOrg] = useState('');
    const [enteredPassword, setPassword] = useState('');
    const [enteredMobile, setMobile] = useState('');

    const emailChangeHandler = (event) => {
        setEmail(event.target.value);
    };

    const orgChangeHandler = (event) => {
        setOrg(event.target.value);
    }

    const nameChangeHandler = (event) => {
        setName(event.target.value);
    };

    const passwordChangeHandler = (event) => {
        setPassword(event.target.value);
    };

    const mobileChangeHandler = (event) => {
        setMobile(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();

        //reset the values of input fields
        setEmail('');
        setName('');
        setPassword('');
        setOrg('');
        setMobile('')

        fetch('http://127.0.0.1:2000/newregistration?'+'name='+enteredName+'&org='+enteredOrg+'&password='+enteredPassword+'&email='+enteredEmail+'&mobile='+enteredMobile)
        .then(
          (response) => (response.json())
         ).then((response)=> {
          if (response.status === 'success') {
            document.getElementById('res').innerHTML='Registered Successfully';
            document.getElementById('err').innerHTML='';
          } else if(response.status=== 'failure'){
            document.getElementById('err').innerHTML='Account Already Exist';
            document.getElementById('res').innerHTML='';
          }
    });

        console.log(enteredName,enteredEmail,enteredOrg,enteredPassword);
    };
    return ( 
        <div>
            <Navbar />
            <br/>
            <Container className='col-sm-3'>
                <h1 style={styles.heading1}>Register Form</h1> <br/>
                <Form onSubmit={submitHandler}>
                    <Form.Group  controlId="form.Org">
                        <Form.Label>Org</Form.Label>
                        <Form.Control type="text" value={enteredOrg} onChange={orgChangeHandler} placeholder="Enter Organisation" required/>
                    </Form.Group> <br/>

                    <Form.Group controlId="form.Name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" value={enteredName} onChange={nameChangeHandler} placeholder="Enter Name" required/>
                    </Form.Group> <br/>

                    <Form.Group  controlId="form.Password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" value={enteredPassword} onChange={passwordChangeHandler} placeholder="Enter Password" required/>
                    </Form.Group> <br/>
                    
                    <Form.Group  controlId="form.Email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="text" value={enteredEmail} onChange={emailChangeHandler} placeholder="Enter email" required/>
                    </Form.Group><br/>

                    <Form.Group  controlId="form.Mobile">
                        <Form.Label>Mobile</Form.Label>
                        <Form.Control type="text" value={enteredMobile} onChange={mobileChangeHandler} placeholder="Enter Mobile" required/>
                    </Form.Group><br/>
                    
                    <Button type='submit'>Register</Button>
                </Form> <br/>
                <span style={{color:"red"}} id="err"></span>
                <span style={{color:"green"}} id="res"></span>
            </Container> 
        </div> 
    );
}

export default Register;