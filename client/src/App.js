import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Homepage from './user_homepage';
import NewBooking from './user_newbooking';
import Summary from './user_summary';


// class App extends Component {
  const App = () =>  {
  // constructor(props) {
    // super(props)
    // this.state = {
    //   // message: 'Click the button to load data!'
    // }
  // }

  const fetchData = () => {
  //   axios.get('/api/data') // You can simply make your requests to "/api/whatever you want"
  //   .then((response) => {
  //     // handle success
  //     console.log(response.data) // The entire response from the Rails API

  //     console.log(response.data.message) // Just the message
  //     this.setState({
  //       message: response.data.message
  //     });
  //   }) 

  // Homepage for Users
    axios.get('/api/user', {params:{user_id:1}}) // You can simply make your requests to "/api/whatever you want"
    .then((response) => {
      // handle success
      console.log(response.data) // The entire response from the Rails API

      console.log(response.data.message) // Just the message
      this.setState({
        message: response.data.message
      });
    }) 

  }

  // render() {
    return (

      <BrowserRouter>
        <Routes>

          <Route path='/route' element= {<div>This is a new route</div>}/>

          {/* Homepage for User (src/user_homepage.jsx) */}
          <Route path='/users' element= {<Homepage/>}/>

          {/* New Amenity Booking (src/user_newbooking.jsx) */}
          <Route path='/:user_id/booking' element= {<NewBooking/>}/>

          {/* Summary Route (src/user_summary.jsx) */}
          <Route path='/:user_id/summary' element= {<Summary/>}/>

          {/* Admin - Homepage (src/user_summary.jsx) */}
          <Route path='/:user_id/summary' element= {<Summary/>}/>






          

        </Routes>    
      </BrowserRouter>

    );
  // }
}

export default App;

