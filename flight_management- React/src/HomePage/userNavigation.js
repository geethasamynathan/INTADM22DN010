import React,{useState,useEffect} from 'react';
import {NavLink} from 'react-router-dom';
import {Navbar,Nav,NavItem} from 'react-bootstrap';
function UserNavigation() {  
    const [user,setuser] = useState({ User_Email: '', Password: '' });   
    useEffect(() => {  
        var a = localStorage.getItem('userData');  
        var b = JSON.parse(a);  
        console.log(b.User_Email);  
        setuser(b)  
  
    }, []);  
    
    const logout=() => {
        localStorage.removeItem('userData');
        localStorage.removeItem('permissions');
        localStorage.clear();
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
            <NavLink className="d-inline p-2 bg-dark text-white" to="/aboutus">
                Aboutus
            </NavLink>
            <NavLink className="d-inline p-2 bg-dark text-white" to="/login">
                Login
            </NavLink>
            <NavLink className="d-inline p-2 bg-dark text-white" to="/signup">
                SignUp
            </NavLink>
            <NavLink className="d-inline p-2 bg-dark text-white" to="/Tickethistory">
                User Dashboard
            </NavLink>
            <NavLink className="d-inline p-2 bg-dark text-white" to="/contact">
                Contact
            </NavLink>            
            </Nav>
            </Navbar.Collapse>
            <Navbar.Collapse className="justify-content-end">
            <Navbar.Text><NavItem className='d-inline p-2 bg-dark text-white' >{user.User_Email}</NavItem></Navbar.Text> 
            <Navbar.Text><Nav.Link className="d-inline p-2 bg-dark text-white" onClick={logout}>Log Out</Nav.Link></Navbar.Text>
            </Navbar.Collapse>
        </Navbar>
        </>
    )
}

  
export default UserNavigation