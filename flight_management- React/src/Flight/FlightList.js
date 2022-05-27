import React, { Component } from 'react';  
import axios from 'axios';  
import Table from './FlightTable';  

export default class FlightList extends Component {  

  constructor(props) {  
      super(props);  
      this.state = {business: []};  
    }  
    componentDidMount(){  
      axios.get('http://localhost:51641/api/Flights')  
        .then(response => {  
          this.setState({ business: response.data });  
        })  
        .catch(function (error) {  
          console.log(error);  
        })  
    }  

    tabRow(){  
      return this.state.business.map(function(object, i){  
          return <Table obj={object} key={i} />;  
      });  
    }  

    render() {  
      return (  
        <div>  
          <h4 align="center">Flight List</h4>  
          <table className="table table-striped" style={{ marginTop: 10 }}>  
            <thead>  
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
                <th colSpan="4">Action</th>  
              </tr>  
            </thead>  
            <tbody>  
             { this.tabRow() }   
            </tbody>  
          </table>  
        </div>  
      );  
    }  
  }  