import React, { Component } from 'react';  
import axios from 'axios';  
import { Link } from 'react-router-dom';  
class Table extends Component {  
  constructor(props) {  
    super(props);  
    }  

    // DeleteAircraft= () =>{  
    //  axios.delete('http://localhost:56530/api/Aircraft?id='+this.props.obj.Aircraft_id)  
    // .then(json => {  
    // if(json.data.Status==='Delete'){  
    // alert('Record deleted successfully!!');  
    // }  
    
    // })  
    // }  
  render() {  
    return (  
        <tr>  
          <td>  
            {this.props.obj.Aircraft_Name}  
          </td>  
          <td>  
            {this.props.obj.Total_Seats}  
          </td>  
          
          {/* <td>  
          <Link to={"/edit/"+this.props.obj.Aircraft_id} className="btn btn-success">Edit</Link>  
          </td>  
          <td>  
            <button type="button" onClick={this.DeleteAircraft} className="btn btn-danger">Delete</button>  
          </td>   */}
        </tr>  
    );  
  }  
}  

export default Table;  