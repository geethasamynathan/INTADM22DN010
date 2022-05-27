import logo from './logo.svg';
import './App.css';

import Home from './HomePage/Home';
import {Contact} from './HomePage/Contact';
import {Aboutus} from './HomePage/Aboutus';
import UserLogin from './HomePage/Login';
import SignUp from './HomePage/SignUp';
import Dashboard from './Admin/Dashboard';
import SearchList from './SearchFlight/SearchList';
import FlightBook from './SearchFlight/FlightBook';
import Payment from './SearchFlight/Payment';
import AddAircraft from './Aircraft/AddAircraft';
import AircraftList from './Aircraft/AircraftList';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Login1 from './Admin/Adminlogin';
import AddFlight from './Flight/AddFlight';
import FlightList from './Flight/FlightList';
import FEdit from './Flight/EditFlight';
import BookingList from './TicketDetails/Booking';
import CancelList from './TicketDetails/CancelBooking';
import CheckNavigation from './checkNavigation';
import Tickethistory from './TicketDetails/Tickethistory';
import { render } from '@testing-library/react';

function App() {

  
  
  
  return (
    <BrowserRouter>
    <div className="container">
     <h3 className="m-3 d-flex justify-content-center">
       Hello.. Book Flight of your Dream !
     </h3>
     <CheckNavigation/>
     <Switch>
       <Route path='/' component={Home} exact/>
       <Route path='/contact' component={Contact}/>
       <Route path='/aboutus' component={Aboutus}/>
       <Route path='/login' component={UserLogin}/>
       <Route path='/signup' component={SignUp}/>
       <Route path='/Admin' component={Login1}/>
       <Route path='/Dashboard' component={Dashboard}/>
       <Route path='/SearchList' component={SearchList}/>
       <Route path='/FlightBook/:id' component={FlightBook}/>
       <Route path='/Payment/:id' component={Payment}/>
       <Route path='/AddAircraft' component={AddAircraft}/>
       <Route path='/AircraftList' component={AircraftList}/>
       <Route path='/AddFlight' component={AddFlight}/>
       <Route path='/FlightList' component={FlightList}/>
       <Route path='/fedit/:id' component={FEdit}/>
       <Route path='/BookingList' component={BookingList}/>
       <Route path='/CancelList' component={CancelList}/>
       <Route path='/Tickethistory' component={Tickethistory}/>
       
     </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
