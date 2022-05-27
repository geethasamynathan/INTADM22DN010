import React, { Component } from 'react';  
import axios from 'axios';  
import { Link } from 'react-router-dom';  
class Table extends Component {  
  constructor(props) {  
    super(props);  
    }  

    DeleteAircraft= () =>{  
     axios.delete('http://localhost:51641/api/Flights?id='+this.props.obj.Flight_Id)  
    .then(json => {  
    if(json.data.Status==='Delete'){  
    alert('Flight deleted successfully!!');  
    this.props.history.push('/FlightList')
    }  
    
    })  
    }  
  render() {  
    return (  
        <tr>  
          <td>  
            {this.props.obj.Aircraft_Name}  
          </td>  
          <td>  
            {this.props.obj.Origin}  
          </td>  
          <td>  
            {this.props.obj.Destination}  
          </td>  
          <td>  
            {this.props.obj.Departure_Date}  
          </td>  
          <td>  
            {this.props.obj.Departure_Time}  
          </td>  
          <td>  
            {this.props.obj.Arrival_Time}  
          </td>  
          <td>  
            {this.props.obj.Available_Seats}  
          </td>  
          <td>  
            {this.props.obj.price}  
          </td>  
          <td>  
            {this.props.obj.Flight_Status}  
          </td>  
          
          <td>  
          <Link to={"/fedit/"+this.props.obj.Flight_Id} className="btn btn-success">Edit</Link>  
          </td>  
          <td>  
            <button type="submit" onClick={this.DeleteAircraft} className="btn btn-danger">Delete</button>  
          </td>  
        </tr>  
    );  
  }  
}  

export default Table;  