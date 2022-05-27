import React,{useState,useEffect} from 'react';
import {NavLink} from 'react-router-dom';
import {Navbar,Nav} from 'react-bootstrap';
function Navigation() {  
    //const [user, setuser] = useState();  
    // const [myArray] = useState([]);
    // const [isLoggedIn,setisLoggedIn]=useState();
    // useEffect(() => {  
    // //     var a = localStorage.getItem('SearchData');  
    // //     var b = JSON.parse(a);  
    // //     console.log(user);  
    // //     setuser(b)  
    // //     console.log(b)        
    // //     myArray.push(b);
    // //     //console.log(user.Admin_Email)  
    //     var login=localStorage.getItem('userData');
    //     var log=JSON.parse(login);
    //     setuser(log);
    //     if(log!=null)
    //     {
    //         setisLoggedIn(true);
    //     }
  
    // }, []);  
    
    
    // const logout=() => {
    //     localStorage.removeItem('myData');
    //     localStorage.removeItem('permissions');
    //     return Promise.resolve();
        
    // }
    return(
        <Navbar bg="dark" expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
            <NavLink className="d-inline p-2 bg-dark text-white" to="/">
                Home
            </NavLink>
            <NavLink className="d-inline p-2 bg-dark text-white" to="/aboutus">
                Aboutus
            </NavLink>
            <NavLink className="d-inline p-2 bg-dark text-white" to="/login">
                Login
            </NavLink>
            <NavLink className="d-inline p-2 bg-dark text-white" to="/signup">
                SignUp
            </NavLink>
            <NavLink className="d-inline p-2 bg-dark text-white" to="/Admin">
                Admin
            </NavLink>
            <NavLink className="d-inline p-2 bg-dark text-white" to="/contact">
                Contact
            </NavLink>
            {/* <NavLink className="d-inline p-2 bg-dark text-white" to="/AddAircraft">
                AddAircraft
            </NavLink>
            <NavLink className="d-inline p-2 bg-dark text-white" to="/AircraftList">
                Aircraft List
            </NavLink>
            <NavLink className="d-inline p-2 bg-dark text-white" to="/FlightList">
                Flight List
            </NavLink>   
            <NavLink className="d-inline p-2 bg-dark text-white" to="/BookingList">
            Booking List
            </NavLink>   
            <NavLink className="d-inline p-2 bg-dark text-white" to="/CancelList">
            Cancel List
            </NavLink> */}
            </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

  
export default Navigation