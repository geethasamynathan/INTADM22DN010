import React from 'react';
import { Table} from 'react-bootstrap';
import axios from 'axios';


class TicketList extends React.Component{
    constructor(props){
        super(props);
        var a = localStorage.getItem('userData');  
        var b = JSON.parse(a);
        this.state = {
           error:null,
           users:[],
           ticket:b.User_id,
           response: {}
           
        }
    }

    componentDidMount(){
       axios.get('http://localhost:51874/api/values?id='+this.state.ticket).then(response => response.data).then(
            (result)=>{
                this.setState({
                    users:result
                });
            },
            (error)=>{
                this.setState({error});
            }
        )
    }
   

    render(){      
        const{error,users}=this.state;
        if(error){
            return(
                <div>Error:{error.message}</div>
            )
        }
        else
        {
            return(
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
                      {users.map(user => (
                        <tr key={user.Ticket_id}>
                          <td>{user.Ticket_id}</td>
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
              )
        }
    }
}

export default TicketList;