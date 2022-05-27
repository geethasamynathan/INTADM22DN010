import React from 'react';
import { Table} from 'react-bootstrap';
import axios from 'axios';


class CancelList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
           error:null,
           users:[],
           response: {}
           
        }
    }

    componentDidMount(){
       axios.get('http://localhost:55426/api/CancelTickets').then(response => response.data).then(
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
                        <th>Aircraft Name</th>
                        <th>Origin</th>
                        <th>Destination</th>
                        <th>User Id</th>
                        <th>Return Amount</th>
                    </tr>
                    </thead>
                    <tbody>
                      {users.map(user => (
                        <tr key={user.Cancel_Id}>
                          <td>{user.Ticket_id}</td>
                          <td>{user.Aircraft_Name}</td>
                          <td>{user.Origin}</td>
                          <td>{user.Destination}</td>
                          <td>{user.User_Email}</td>
                          <td>{user.Return_Amount}</td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </div>
              )
        }
    }
}

export default CancelList;