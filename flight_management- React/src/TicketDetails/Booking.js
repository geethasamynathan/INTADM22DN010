import React from 'react';
import { Table} from 'react-bootstrap';
import axios from 'axios';


class BookingList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
           error:null,
           users:[],
           response: {}
           
        }
    }

    componentDidMount(){
       axios.get('http://localhost:49423/api/Payments').then(response => response.data).then(
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
                        <th>Flight Id</th>
                        <th>Aircraft Name</th>
                        <th>Origin</th>
                        <th>Destination</th>
                        <th>User Id</th>
                        <th>Card Type</th>
                        <th>Card Number</th>
                        <th>Number Of Seats</th>
                        <th>Total Price</th>
                        <th>Payment Status</th>
                    </tr>
                    </thead>
                    <tbody>
                      {users.map(user => (
                        <tr key={user.Payment_Id}>
                          <td>{user.Ticket_id}</td>
                          <td>{user.Flight_Id}</td>
                          <td>{user.Aircraft_Name}</td>
                          <td>{user.Origin}</td>
                          <td>{user.Destination}</td>
                          <td>{user.User_Email}</td>
                          <td>{user.Card_Type}</td>
                          <td>{user.Card_No}</td>
                          <td>{user.No_Of_Seats}</td>
                          <td>{user.Total_Prize}</td>
                          <td>{user.Payment_Status}</td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </div>
              )
        }
    }
}

export default BookingList;