import React from 'react';   
import { Container, Col, Form, Row, FormGroup, Label, Input, Button } from 'reactstrap';  
import axios from 'axios'  
import './Flight.css'; 
class FEdit extends React.Component {  
    constructor(props) {  
        super(props)  

    this.onChangeDeparture_Date = this.onChangeDeparture_Date.bind(this);  
    this.onChangeDeparture_Time = this.onChangeDeparture_Time.bind(this);    
    this.onChangeArrival_Time=this.onChangeArrival_Time.bind(this);
    this.onChangeFlight_Status=this.onChangeFlight_Status.bind(this);
    this.onSubmit = this.onSubmit.bind(this);  

         this.state = {  
            Departure_Date: '',  
            Departure_Time: '',
            Arrival_Time:'',
            Flight_Status:''
        }  
    }  

  componentDidMount() {  
      axios.get('http://localhost:51641/api/Flights?id='+this.props.match.params.id)  
          .then(response => {  
              console.log(response);
              this.setState({  
                Departure_Date: response.data.Departure_Date,  
                Departure_Time: response.data.Departure_Time,
                Arrival_Time: response.data.Arrival_Time, 
                Flight_Status: response.data.Flight_Status
                 });  
          })  
          .catch(function (error) {  
              console.log(error);  
          })  
    }  

  onChangeDeparture_Date(e) {  
    this.setState({  
        Departure_Date: e.target.value  
    });  
  }  
  onChangeDeparture_Time(e) {  
    this.setState({  
        Departure_Time: e.target.value  
    });    
  }  
  onChangeArrival_Time(e) {  
    this.setState({  
        Arrival_Time: e.target.value  
    });    
  }
  onChangeFlight_Status(e) {  
    this.setState({  
        Flight_Status: e.target.value  
    });    
  }


  onSubmit(e) {  
    e.preventDefault();  
    const obj = {  
      Flight_id:this.props.match.params.id,  
      Departure_Date: this.state.Departure_Date,  
      Departure_Time: this.state.Departure_Time,    
      Arrival_Time: this.state.Arrival_Time,
      Flight_Status: this.state.Flight_Status

    };  
    console.log(obj);
    axios.post('http://localhost:51641/api/Flights/', obj)  
        .then(res => console.log(res.data));  
        this.props.history.push('/FlightList')
    // axios.put('http://localhost:51641/api/Flights/'+this.props.match.params.id, obj)  
    //     .then(res => console.log(res.data));  
    //     debugger;  
    //     this.props.history.push('/FlightList')  
  }  
    render() {  
        return (  
            <Container className="App">  

             <h4 className="PageHeading">Update Flight Status</h4>  
                <Form className="form" onSubmit={this.onSubmit}>  
                    <Col>  
                        <FormGroup row>  
                            <Label for="name" sm={2}>Departure Date</Label>  
                            <Col sm={10}>  
                                <Input type="date" name="Departure_Date" value={this.state.Departure_Date} onChange={this.onChangeDeparture_Date}  
                                placeholder="Departure Date" />  
                            </Col>  
                        </FormGroup>  
                        <FormGroup row>  
                            <Label for="Password" sm={2}>Departure Time</Label>  
                            <Col sm={10}>  
                                <Input type="time" name="Departure_Time" value={this.state.Departure_Time} onChange={this.onChangeDeparture_Time} placeholder="Departure Time" />  
                            </Col>  
                        </FormGroup>  
                        <FormGroup row>  
                            <Label for="Password" sm={2}>Arrival Time</Label>  
                            <Col sm={10}>  
                                <Input type="time" name="Arrival_Time" value={this.state.Arrival_Time} onChange={this.onChangeArrival_Time} placeholder="Arrival Time" />  
                            </Col>  
                        </FormGroup> 
                        <FormGroup row>  
                            <Label for="Password" sm={2}>Flight Status</Label>  
                            <Col sm={10}>  
                                <Input type="text" name="Flight_Status" value={this.state.Flight_Status} onChange={this.onChangeFlight_Status} placeholder="Flight Status" />  
                            </Col>  
                        </FormGroup>  
                         
                          
                    </Col>  
                    <Col>  
                        <FormGroup row>  
                            <Col sm={5}>  
                            </Col>  
                            <Col sm={1}>  
                          <Button type="submit" color="success">Submit</Button>{' '}  
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

export default FEdit;  