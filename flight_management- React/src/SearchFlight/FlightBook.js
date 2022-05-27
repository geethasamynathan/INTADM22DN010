import React from 'react';  
import axios from 'axios';  
import { Container, Col, Form, Row, FormGroup, Label, Input, Button } from 'reactstrap';  
class FlightBook extends React.Component{  
constructor(props){  
super(props)  
var login=localStorage.getItem('userData');
var log=JSON.parse(login);
this.state = {  
Flight_Id:'',  
User_id:log.User_id ,
No_Of_Seats:''
} 
console.log(this.state.User_id);
}   
AddBooking=()=>{  
  axios.post('http://localhost:51874/api/Tickets', {Flight_Id:this.props.match.params.id,User_id:this.state.User_id,
  No_Of_Seats:this.state.seats})  
.then(json => {  
if(json.data.Status==='Success'){  
  const serializedState = this.state.seats;  
  var a= localStorage.setItem('BookData', serializedState); 
  console.log(json.data.Status);  
  console.log(json.data.Ticket_detail.Ticket_id);
  alert("Detail Save Successfully");  
this.props.history.push('/Payment/'+json.data.Ticket_detail.Ticket_id)  
}  
else{  
    console.log('failed');
alert('Data not Saved');  
debugger;    
}  
})  
}  
   
handleChange= (e)=> {  
this.setState({[e.target.name]:e.target.value});  
}  
   
render() {  
return (  
   <Container className="App">  
    <h4 className="PageHeading">Flight Booking</h4>  
    <Form className="form">  
      <Col>  
          
        <FormGroup row>  
          <Label for="number" sm={2}>No of Seats</Label>  
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
          <button type="button" onClick={this.AddBooking} className="btn btn-success">Submit</button>  
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
   
export default FlightBook; 