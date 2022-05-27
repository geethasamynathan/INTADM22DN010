import React, { useState, useEffect } from 'react'  
import Login1 from './Adminlogin';
  
function Dashboard() {  
    const [user, setuser] = useState({ Admin_Email: '', Password: '' });  
    useEffect(() => {  
        var a = localStorage.getItem('AdminData');  
        var b = JSON.parse(a);  
        console.log(b.Admin_Email);  
        setuser(b)  
        console.log(user);  
  
    }, []);  
    const logout=() => {
        localStorage.removeItem('myData');
        localStorage.removeItem('permissions');
        this.props.history.push('/') ;
        return Promise.resolve();
        
    }
    return (  
        <>  
            <div class="col-sm-12 btn btn-primary">  
                Dashboard  
        </div>  
            <h1>Welcome :{user.Admin_Email}</h1>  
            <button onClick={logout}>Logout</button>
        </>  
    )  
}  
  
export default Dashboard