import React,{useState,useEffect} from 'react';
import {NavLink} from 'react-router-dom';
import {Navbar,Nav, Button, NavItem} from 'react-bootstrap';
function AdminNavigation() {  
    const [admin,setadmin] = useState({ Admin_Email: '', Password: '' });   
    useEffect(() => {  
        var a = localStorage.getItem('AdminData');  
        var b = JSON.parse(a);  
        console.log(b.Admin_Email);  
        setadmin(b)  
        console.log(admin.Admin_Email)  
  
    }, []);  
    
    const logout=() => {
        localStorage.removeItem('AdminData');
        localStorage.removeItem('permissions');
        Promise.resolve();
        this.props.history.push('/')
    }
    
    return(
        <>
        <Navbar bg="dark" expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
            <NavLink className="d-inline p-2 bg-dark text-white" to="/">
                Home
            </NavLink>
            <NavLink className="d-inline p-2 bg-dark text-white" to="/AddAircraft">
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
            </NavLink>
            </Nav>
            </Navbar.Collapse>
         
            
            <Navbar.Collapse className="justify-content-end">
            <Navbar.Text><NavItem className='d-inline p-2 bg-dark text-white' >{admin.Admin_Email}</NavItem></Navbar.Text> 
            <Navbar.Text><Nav.Link className="d-inline p-2 bg-dark text-white" onClick={logout}>Log Out</Nav.Link></Navbar.Text>
            </Navbar.Collapse>
            {/* <button class="btn btn-outline-success" onClick={logout} type="submit">Logout</button> */}
            
            
        </Navbar>
        </>
    )
}

  
export default AdminNavigation