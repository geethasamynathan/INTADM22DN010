import React, { useState} from 'react'  
import { Input } from 'reactstrap'; 
import axios from 'axios';  
function Home(props) {  
    const [employee, setemployee] = useState({
        Origin: "",
        Destination: "",
        Departure_Date: ""
});  

    const apiUrl = "http://localhost:51641/api/Flight/Search";    
    const Login = (e) => {    
            e.preventDefault();       
            const data = { Origin:employee.Origin, Destination: employee.Destination ,Departure_Date:employee.Departure_Date};    
            axios.post(apiUrl, data)    
            .then((result) => {    
                debugger;  
                console.log(result.data);   
                const serializedState = JSON.stringify(result.data.SearchDetails);  
               var a= localStorage.setItem('SearchData', serializedState);   
                console.log("A:",a)  
                //const user =result.data.SearchDetails;  
                console.log(result.data.message);  
                if (result.data.status =='200')    
                    props.history.push('/SearchList')    
                else    
                alert('Invalid User');    
            })        
          };    
          
          const onChange = (e) => {    
                e.persist();    
                debugger;    
                setemployee({...employee, [e.target.name]: e.target.value});    
              }    
    return (  

      
        <div style={{ backgroundImage: "url(/BannerImage.png)" }}>  
        
        <div class="row justify-content-center">  
          <div class="col-xl-10 col-lg-12 col-md-9">  
            <div class="card o-hidden border-0 shadow-lg my-5">  
              <div class="card-body p-0">  
                <div class="row">  
                  <div class="col-lg-3 d-none d-lg-block bg-login-image"></div>  
                  <div class="col-lg-6">  
                    <div class="p-5">  
                      <div class="text-center">  
                        <h1 class="h4 text-gray-900 mb-4">Search For Flight</h1>  
                      </div>  
                      <form onSubmit={Login} class="user">  
                        <div class="form-group">  
                          <input type="text" class="form-control" value={employee.Origin} onChange={ onChange }  name="Origin" id="Email" placeholder="Enter Origin"/>  
                        </div>  
                        <div class="form-group">  
                          <input type="text" class="form-control" value={employee.Destination} onChange={ onChange }  name="Destination" id="DepPasswordartment" placeholder="Destination"/>  
                        </div>  
                        <div class="form-group">  
                          <Input type="date" class="form-control" value={employee.Departure_Date} onChange={ onChange }  name="Departure_Date" id="DepPasswordartment" placeholder="DD/MM/YYYY"/>  
                        </div> 
                        {/* <div class="form-group">  
                          <div class="custom-control custom-checkbox small">  
                            <input type="checkbox" class="custom-control-input" id="customCheck"/>  
                            <label class="custom-control-label" for="customCheck">Remember Me</label>  
                          </div>  
                        </div> */}  
                        <button type="submit" className="btn btn-info mb-2" block><span>Search Flight</span></button>    
                        <hr/>  
                      </form>  
                      <hr/>  
                    </div>  
                  </div>  
                </div>  
              </div>  
            </div>  
           </div>  
          </div>  
        </div>  
    )  
}  
  
export default Home 