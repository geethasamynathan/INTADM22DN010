import React, { Component } from 'react';  
import axios from 'axios';  
import Table from './Table';  

export default class AircraftList extends Component {  

  constructor(props) {  
      super(props);  
      this.state = {business: []};  
    }  
    componentDidMount(){  
      debugger;  
      axios.get('http://localhost:56530/api/Aircraft')  
        .then(response => {  
          this.setState({ business: response.data });  
          debugger;  

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
          <h4 align="center">Aircraft List</h4>  
          <table className="table table-striped" style={{ marginTop: 10 }}>  
            <thead>  
              <tr>  
                <th>Aircraft Name</th>  
                <th>Seats</th>   
                {/* <th colSpan="4">Action</th>   */}
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