import React, { useState, useEffect } from 'react'  
import { Table} from 'react-bootstrap'; 
import {Link} from 'react-router-dom';
function SearchList() {  
    const [user, setuser] = useState({ Aircraft_Name: '', Origin: '',Destination:'',Departure_Date:'',Departure_Time:'',Arrival_Time:'',Available_Seats:'',price:'',Flight_Status:'' });  
    const [myArray] = useState([]);
    const [isLoggedIn,setisLoggedIn]=useState();
    useEffect(() => {  
        var a = localStorage.getItem('SearchData');  
        var b = JSON.parse(a);  
        console.log(user);  
        setuser(b)  
        console.log(b)        
        myArray.push(b);
        //console.log(user.Admin_Email)  
        var login=localStorage.getItem('userData');
        var log=JSON.parse(login);
        setuser(log);
        if(log!=null)
        {
            setisLoggedIn(true);
        }
  
    }, []);  
    
    
    // const logout=() => {
    //     localStorage.removeItem('myData');
    //     localStorage.removeItem('permissions');
    //     return Promise.resolve();
        
    // }
    return (  
        <>  
              
            {/* <h1>Welcome :{user.Origin}</h1>   */}
            {/* <button onClick={logout}>Logout</button> */}
            <div>
            <Table>
                    <thead className="btn-primary">
                      <tr>
                        <th>Aircraft Name</th>
                        <th>Origin</th>
                        <th>Destination</th>
                        <th>Departure Date</th>
                        <th>Departure Time</th>
                        <th>Arrival Time</th>
                        <th>Available Seats</th>
                        <th>Price</th>
                        <th>Flight Status</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                      {myArray.map(us => (
                        <tr key={us.Flight_Id}>
                          <td>{us.Aircraft_Name}</td>
                          <td>{us.Origin}</td>
                          <td>{us.Destination}</td>
                          <td>{us.Departure_Date}</td>
                          <td>{us.Departure_Time}</td>
                          <td>{us.Arrival_Time}</td>
                          <td>{us.Available_Seats}</td>
                          <td>{us.price}</td>
                          <td>{us.Flight_Status}</td>
                          <td>{isLoggedIn ? <Link to={"/FlightBook/"+us.Flight_Id} className="btn btn-success">Flight Book</Link> : <Link to={"/login"} className="btn btn-success">Login</Link>}</td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
            </div>
        </>  
    )  
}  
  
export default SearchList