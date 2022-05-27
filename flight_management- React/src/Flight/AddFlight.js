import React from 'react';  
import axios from 'axios';  
import Select from 'react-select'
//import CustomDropdown from './CustomDropDown';
import { Container, Col, Form, Row, FormGroup, Label, Input, Button } from 'reactstrap';  
//import App1 from './CustomDropDown';
class AddFlight extends React.Component{  
constructor(props){ 
super(props)  
var a = localStorage.getItem('AircraftData');
var airdata=JSON.parse(a)
this.state = {  
    Origin:'',  
    Destination:'' ,
    Departure_Date:'',
    Departure_Time:'',
    Arrival_Time:'',
    Available_Seats:airdata.Total_Seats,
    price:'',
    Aircraft_id:airdata.Aircraft_id,
    Flight_Status:''
}  
console.log(this.state.Available_Seats);
console.log(this.state.Aircraft_id);
}   
// async getOptions(){
//     const res = await axios.get('http://localhost:56530/api/Aircraft')
//     const data = res.data

//     const options = data.map(d => ({
//       value : d.Aircraft_id,
//       label : d.Aircraft_Name

//     }))

//     this.setState({selectOptions: options})

//   }

  // handleChange(ev)
  //  this.setState({Aircraft_id:ev.value, sname:ev.label})
  // }

  // componentDidMount(){
  //     this.getOptions()
  // }
AddFlight=()=>{  
    const obj ={
        Origin:this.state.Origin,
        Destination:this.state.Destination,
        Departure_Date:this.state.Departure_Date,
        Departure_Time:this.state.Departure_Time,
        Arrival_Time:this.state.Arrival_Time,
        Available_Seats:this.state.Available_Seats,
        price:this.state.price,
        Aircraft_id:this.state.Aircraft_id,
        Flight_Status:this.state.Flight_Status
    }
    console.log(obj);
  axios.post('http://localhost:51641/api/Flights',obj )  
.then(json => {  
if(json.data.Status==='Success'){  
  console.log(json.data.Status);  
  localStorage.removeItem('AircraftData');
  alert("Flight Added Successfully");  
this.props.history.push('/FlightList')  
}  
else{  
alert('Flight Not Added');  
debugger;  
this.props.history.push('/FlightList')  
}  
})  
}  
   
handleChange= (e)=> {  
this.setState({[e.target.name]:e.target.value});  
}  
   
render() {  
    console.log(this.state.selectOptions);
  
return (  
   <Container className="App">  
    <h4 className="PageHeading">Enter Flight Details</h4>  
    <Form className="form">  
      <Col>  
        <FormGroup row>  
          <Label for="name" sm={2}>Origin</Label>  
          <Col sm={10}>  
            <Input type="text" name="Origin" onChange={this.handleChange} value={this.state.Origin} placeholder="Enter Name" />  
          </Col>  
        </FormGroup>  
        <FormGroup row>  
          <Label for="name" sm={2}>Destination</Label>  
          <Col sm={10}>  
            <Input type="text" name="Destination" onChange={this.handleChange} value={this.state.Destination} placeholder="Enter Name" />  
          </Col>  
        </FormGroup> 
        <FormGroup row>  
          <Label for="name" sm={2}>Departure Date</Label>  
          <Col sm={10}>  
            <Input type="date" name="Departure_Date" onChange={this.handleChange} value={this.state.Departure_Date} placeholder="Enter Name" />  
          </Col>  
        </FormGroup> 
        <FormGroup row>  
          <Label for="name" sm={2}>Departure time</Label>  
          <Col sm={10}>  
            <Input type="time" name="Departure_Time" onChange={this.handleChange} value={this.state.Departure_Time} placeholder="Enter Name" />  
          </Col>  
        </FormGroup> 
        <FormGroup row>  
          <Label for="name" sm={2}>Arrival Time</Label>  
          <Col sm={10}>  
            <Input type="time" name="Arrival_Time" onChange={this.handleChange} value={this.state.Arrival_Time} placeholder="Enter Name" />  
          </Col>  
        </FormGroup>  
        <FormGroup row>  
          <Label for="name" sm={2}>Price</Label>  
          <Col sm={10}>  
            <Input type="number" name="price" onChange={this.handleChange} value={this.state.price} placeholder="Enter Name" />  
          </Col>  
        </FormGroup>  
        
        <FormGroup row>  
          <Label for="name" sm={2}>Flight Status</Label>  
          <Col sm={10}>  
            <Input type="text" name="Flight_Status" onChange={this.handleChange} value={this.state.Flight_Status} placeholder="Enter Name" />  
          </Col>  
        </FormGroup> 
        
      </Col>  
      <Col>  
        <FormGroup row>  
          <Col sm={5}>  
          </Col>  
          <Col sm={1}>  
          <button type="button" onClick={this.AddFlight} className="btn btn-success">Submit</button>  
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
   
export default AddFlight;  