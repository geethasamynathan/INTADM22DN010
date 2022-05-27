import React, { useState, useEffect } from 'react'  
import { Table} from 'react-bootstrap'; 
import axios from 'axios';
import {Link} from 'react-router-dom';
function Tickethistory() {  
    const [user, setuser] = useState({ Ticket_id: '', Origin: '',Destination:'',Departure_Date:'',Departure_Time:'',No_Of_Seats:'',Flight_Status:'' });
    const [myArray] = useState([]);
    
    useEffect(() => {  
        var a = localStorage.getItem('userData');  
        var b = JSON.parse(a);
        const c=axios.get('http://localhost:51874/api/values?id='+b.User_id)  
        myArray.push(c);
        
  
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
                        <th>Ticket Id</th>
                        <th>Origin</th>
                        <th>Destination</th>
                        <th>Departure Date</th>
                        <th>Departure Time</th>
                        <th>Number Of Seats</th>
                        <th>Flight Status</th>
                    </tr>
                    </thead>
                    <tbody>
                      {myArray.map(user => (
                        <tr key={user.Ticket_id}>
                          
                          <td>{user.Origin}</td>
                          <td>{user.Destination}</td>
                          <td>{user.Departure_Date}</td>
                          <td>{user.Departure_Time}</td>
                          <td>{user.No_Of_Seats}</td>
                          <td>{user.Flight_Status}</td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
            </div>
        </>  
    )  
}  
  
export default Tickethistory