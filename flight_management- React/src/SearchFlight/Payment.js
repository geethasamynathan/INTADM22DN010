import React from 'react';  
import axios from 'axios';  
import { Container, Col, Form,FormGroup, Label, Input, Button } from 'reactstrap';  
class Payment extends React.Component{  
constructor(props){  
super(props)  
this.onChangeTotal_Prize = this.onChangeTotal_Prize.bind(this);
var Pstatus="Success";
var a = localStorage.getItem('SearchData');
var avseat=JSON.parse(a)
var b=localStorage.getItem('BookData');
var c=avseat.Available_Seats-b;
this.state = {  
    Ticket_id:'',  
    Card_type:'' ,
    Card_No:'',
    Total_Prize:'',
    Flight_Id:avseat.Flight_Id,
    Available_Seats:c,
    Payment_Status:Pstatus
}  
console.log(this.state.Payment_Status)
console.log(this.props.match.params.id);
}   
componentDidMount() {  
    axios.get('http://localhost:51874/api/Tickets?id='+this.props.match.params.id)  
        .then(response => {  
            console.log(response);
            this.setState({  
                Total_Prize:response.data
               });  
               

        })  
        .catch(function (error) {  
            console.log(error);  
        })  
        
  } 
  // updateseats=()=>{
    
  // }
  
  onChangeTotal_Prize(e) {  
    this.setState({  
        Total_Prize: e.target.value  
    });
   }
doPayment=()=>{  
  axios.post('http://localhost:49423/api/Payments', {Ticket_id:this.props.match.params.id,Card_type:this.state.Card_type,Card_No:this.state.Card_No,
  Total_Prize:this.state.Total_Prize,Payment_Status:this.state.Payment_Status})  
.then(json => {  
if(json.data.Status==='Success'){  
  console.log(json.data.Status);  
  axios.post('http://localhost:51641/api/Flight/updateavailableSeats',{Flight_Id:this.state.Flight_Id,Available_Seats:this.state.Available_Seats})
        .then(json=>{
          if(json.data.Status==='Updated')
          {
            console.log(json.data.Status);
          }
        })
  
  alert("Payment Successfully");
  localStorage.removeItem('SearchData');
  localStorage.removeItem('BookData');
  // localStorage.removeItem('myData');
  localStorage.removeItem('permissions');
  Promise.resolve();
this.props.history.push('/')  
}  
else{  
alert('Data not Saved');  
debugger;  
this.props.history.push('/')  
}  
})  
}  
   
handleChange= (e)=> {  
this.setState({[e.target.name]:e.target.value});  
}  
   
render() {  
return (  
   <Container className="App">  
    <h4 className="PageHeading">Payment</h4>  
    <Form className="form">  
      <Col>  
        <FormGroup row>  
          <Label for="name" sm={2}>Card type</Label>  
          <Col sm={10}>  
            <Input type="text" name="Card_type" onChange={this.handleChange} value={this.state.Card_type} placeholder="Enter Card type" />  
          </Col>  
        </FormGroup>    
        <FormGroup row>  
          <Label for="number" sm={2}>Card Number</Label>  
          <Col sm={10}>  
            <Input type="number" name="Card_No" onChange={this.handleChange} value={this.state.Card_No} placeholder="Enter Card Number" />  
          </Col>  
        </FormGroup> 
        <FormGroup row>  
          <Label for="number" sm={2}>Total Price</Label>  
          <Col sm={10}>  
            <Input type='number' name="Total_Prize" onChange={this.onChange} value={this.state.Total_Prize} placeholder="" />  
          </Col>  
        </FormGroup> 
      </Col>  
      <Col>  
        <FormGroup row>  
          <Col sm={5}>  
          </Col>  
          <Col sm={3}>  
          <Button type="button" onClick={this.doPayment} className="btn btn-success">Payment</Button>  
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
   
export default Payment; 