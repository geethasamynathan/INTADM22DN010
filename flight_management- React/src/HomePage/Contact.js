import React,{Component} from 'react';
//import './Contact.css'
export class Contact extends Component{

    render(){
        return(
            
            
    <div style={{ backgroundImage: "url(/BannerImage.png)" }}>
      
      
        <h1> Contact Us</h1>

        <form id="contact-form">
          <label htmlFor="name">Full Name</label>
          <input name="name" placeholder="Enter full name..." type="text" />
          <label htmlFor="email">Email</label>
          <input name="email" placeholder="Enter email..." type="email" />
          <label htmlFor="message">Message</label>
          <textarea
            rows="6"
            placeholder="Enter message..."
            name="message"
            required
          ></textarea>
          <button type="submit"> Send Message</button>
        </form>
      
    </div>
  );
        
    }
}