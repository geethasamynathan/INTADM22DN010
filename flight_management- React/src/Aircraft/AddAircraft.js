import React from 'react';  
import axios from 'axios';  
import { Container, Col, Form, Row, FormGroup, Label, Input, Button } from 'reactstrap';  
class AddAircraft extends React.Component{  
constructor(props){  
super(props)  
this.state = {  
Aircraft_Name:'',  
Total_Seats:'' 
}  
}   
Addaircraft=()=>{  
  axios.post('http://localhost:56530/api/Aircraft', {Aircraft_Name:this.state.Name,
  Total_Seats:this.state.seats})  
.then(json => {  
  const serializedState = JSON.stringify(json.data.Aircraftdata);  
  var air= localStorage.setItem('AircraftData', serializedState);
if(json.data.Status==='Success'){  
  console.log(json.data.Status);  
  alert("Aircraft Added Successfully");  
this.props.history.push('/AddFlight')  
}  
else{  
alert('Aircraft detail not Added');  
debugger;  
this.props.history.push('/AircraftList')  
}  
})  
}  
   
handleChange= (e)=> {  
this.setState({[e.target.name]:e.target.value});  
}  
   
render() {  
return (  
   <Container className="App">  
    <h4 className="PageHeading">Enter Aircraft Details</h4>  
    <Form className="form">  
      <Col>  
        <FormGroup row>  
          <Label for="name" sm={2}>Aircraft Name</Label>  
          <Col sm={10}>  
            <Input type="text" name="Name" onChange={this.handleChange} value={this.state.Name} placeholder="Enter Name" />  
          </Col>  
        </FormGroup>    
        <FormGroup row>  
          <Label for="number" sm={2}>Total Seats</Label>  
          <Col sm={10}>  
            <Input type="number" name="seats" onChange={this.handleChange} value={this.state.seats} placeholder="Enter Total Seats" />  
          </Col>  
        </FormGroup>  
      </Col>  
      <Col>  
        <FormGroup row>  
          <Col sm={5}>  
          </Col>  
          <Col sm={1}>  
          <button type="button" onClick={this.Addaircraft} className="btn btn-success">Submit</button>  
          </Col>  
          <Col sm={1}>  
            <Button color="danger">Cancel</Button>{' '}  
          </Col>  
          <Col sm={5}>  
          </Col>  
        </FormGroup>  
      </Col>  
    </Form>  
  </Container>  
);  
}  
   
}  
   
export default AddAircraft;  