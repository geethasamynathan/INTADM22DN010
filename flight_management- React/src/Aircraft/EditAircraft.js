import React from 'react';   
import { Container, Col, Form, Row, FormGroup, Label, Input, Button } from 'reactstrap';  
import axios from 'axios'  
import './Aircraft.css'; 
class Edit extends React.Component {  
    constructor(props) {  
        super(props)  

    this.onChangeAircraft_Name = this.onChangeAircraft_Name.bind(this);  
    this.onChangeTotal_Seats = this.onChangeTotal_Seats.bind(this);    
    this.onSubmit = this.onSubmit.bind(this);  

         this.state = {  
            Aircraft_Name: '',  
            Total_Seats: ''
   

        }  
    }  

  componentDidMount() {  
      axios.get('http://localhost:56530/api/Aircraft?id='+this.props.match.params.id)  
          .then(response => {  
              console.log(response);
              this.setState({  
                Aircraft_Name: response.data.Aircraft_Name,   
                Total_Seats: response.data.Total_Seats,  
                 });  

          })  
          .catch(function (error) {  
              console.log(error);  
          })  
    }  

  onChangeAircraft_Name(e) {  
    this.setState({  
        Aircraft_Name: e.target.value  
    });  
  }  
  onChangeTotal_Seats(e) {  
    this.setState({  
        Total_Seats: e.target.value  
    });    
  }  


  onSubmit(e) {  
    debugger;  
    e.preventDefault();  
    const obj = {  
      Aircraft_id:this.props.match.params.id,  
      Aircraft_Name: this.state.Aircraft_Name,  
      Total_Seats: this.state.Total_Seats,    

    };  
    axios.put('http://localhost:56530/api/Aircraft/'+this.props.match.params.id, obj)  
        .then(res => console.log(res.data));  
        debugger;  
        this.props.history.push('/AircraftList')  
  }  
    render() {  
        return (  
            <Container className="App">  

             <h4 className="PageHeading">Update Student Informations</h4>  
                <Form className="form" onSubmit={this.onSubmit}>  
                    <Col>  
                        <FormGroup row>  
                            <Label for="name" sm={2}>Aircraft Name</Label>  
                            <Col sm={10}>  
                                <Input type="text" name="Aircraft_Name" value={this.state.Aircraft_Name} onChange={this.onChangeAircraft_Name}  
                                placeholder="Aircraft Name" />  
                            </Col>  
                        </FormGroup>  
                        <FormGroup row>  
                            <Label for="Password" sm={2}>Total Seats</Label>  
                            <Col sm={10}>  
                                <Input type="number" name="Total_Seats" value={this.state.Total_Seats} onChange={this.onChangeTotal_Seats} placeholder="Total Seats" />  
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

export default Edit;  