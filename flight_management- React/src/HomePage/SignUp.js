import React from 'react';  
import axios from 'axios';  
import {Link} from 'react-router-dom';
import {  Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';  

class SignUp extends React.Component{  
constructor(props){  
super(props)  
this.state ={ Fname: '', Lname: '', gender: '', age: '', User_Email: '',Phone_No:'',Password:'' }
}   

AddUser=()=>{  
    const obj = { Fname: this.state.Fname,
        Lname:this.state.Lname,
        gender:this.state.gender,
        age:this.state.age,
        User_Email:this.state.User_Email,
        Phone_No:this.state.Phone_No, 
        Password: this.state.Password }; 
    console.log(obj);
  axios.post('http://localhost:63745/api/User/SignUp',obj )  
.then(json => {  
if(json.data.Status==='Success'){  
  console.log(json.data.Status);  
  alert("Data Save Successfully");  
this.props.history.push('/Home')  
}  
else{  
alert('Data not Saved');  
debugger;  
this.props.history.push('/Home')  
}  
})  
}  
   
handleChange= (e)=> {  
this.setState({[e.target.name]:e.target.value});  
}  
//   const onChange = (e) => {  
//     e.persist();  
//     debugger;  
//     setdata({ ...data, [e.target.name]: e.target.value });  
//   }  
render(){
  return (  
    <div class="container" style={{ backgroundImage: "url(/BannerImage.png)" }} >  
      <div class="row">  
      </div>  
      <div class="card o-hidden border-0 shadow-lg my-5" style={{ "marginTop": "5rem!important;" }}>  
        <div class="card-body p-0">  
          <div class="row">  
            <div class="col-lg-12">  
              <div class="p-5">  
                <div class="text-center">  
                  <h1 class="h4 text-gray-900 mb-4">SIGN UP</h1>  
                </div>  
                <Form className="form"> 
                <Col>
                <FormGroup row>  
                  <Label for="name" sm={2}>First Name</Label>  
                   <Col sm={10}>  
                     <Input type="text" name="Fname" onChange={this.handleChange} value={this.state.Fname} placeholder="Enter First Name" />  
                  </Col>  
                </FormGroup>   
                <FormGroup row>  
                  <Label for="name" sm={2}>Last Name</Label>  
                   <Col sm={10}>  
                     <Input type="text" name="Lname" onChange={this.handleChange} value={this.state.Lname} placeholder="Enter Last Name" />  
                  </Col>  
                </FormGroup>
                <FormGroup row>  
                  <Label for="name" sm={2}>Gender</Label>  
                   <Col sm={10}>  
                     <Input type="text" name="gender" onChange={this.handleChange} value={this.state.gender} placeholder="Enter Gender" />  
                  </Col>  
                </FormGroup>
                <FormGroup row>  
                  <Label for="name" sm={2}>Age</Label>  
                   <Col sm={10}>  
                     <Input type="number" name="age" onChange={this.handleChange} value={this.state.age} placeholder="Enter Age" />  
                  </Col>  
                </FormGroup>
                <FormGroup row>  
                  <Label for="name" sm={2}>Email</Label>  
                   <Col sm={10}>  
                     <Input type="text" name="User_Email" onChange={this.handleChange} value={this.state.User_Email} placeholder="Enter Email" />  
                  </Col>  
                </FormGroup>
                <FormGroup row>  
                  <Label for="name" sm={2}>Phone Number</Label>  
                   <Col sm={10}>  
                     <Input type="number" name="Phone_No" onChange={this.handleChange} value={this.state.Phone_No} placeholder="Enter Phone Number" />  
                  </Col>  
                </FormGroup>
                <FormGroup row>  
                  <Label for="name" sm={2}>Password</Label>  
                   <Col sm={10}>  
                     <Input type="Password" name="Password" onChange={this.handleChange} value={this.state.Password} placeholder="Enter Password" />  
                  </Col>  
                </FormGroup>
                  
                <FormGroup row>  
                 <Col sm={5}>  
                 </Col>  
                 <Col sm={1}>  
                 <button type="button" onClick={this.AddUser} className="btn btn-success">Submit</button>  
                 </Col>  
                 <Col sm={1}>  
                 <Button color="danger">Cancel</Button>{' '}  
                 </Col>  
                 <Col sm={5}>  
                 </Col>  
                 
                </FormGroup> 
                <FormGroup row>
                  <Col sm={5}></Col><Col sm={2}><Link to={"/login"} className="link-primary">Registered User ?</Link></Col>
                  </FormGroup> 
                </Col> 
                </Form>  

                <hr />  
              </div>  
            </div>  
          </div>  
        </div>  
      </div>  
    </div>  
  )  
}  
}
  
export default SignUp  