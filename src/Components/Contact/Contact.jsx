import React from 'react'
import './Contact.css'
import msg_icon from '../../assests/msg-icon.png'
import mail_icon from '../../assests/mail-icon.png'
import phone_icon from '../../assests/phone-icon.png'
import location_icon from '../../assests/location-icon.png'
import white_arrow from '../../assests/white-arrow.png'

const Contact = () => {

    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "cc22adfd-507c-4fff-8ba9-9733842a9d05");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };


  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>
            Send us a Message<img src={msg_icon} alt=""></img>
        </h3>
        <p>
        Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.
        </p>
        <ul>
            <li><img src={mail_icon} alt=""></img> sathwikesampally@gmail.com</li>
            <li><img src={phone_icon} alt=""></img> +91 6304095689</li>
            <li><img src={location_icon} alt=""></img> IIITDM kancheepuram, Kandigai, Tamilnadu, India, 505122</li>
        </ul>
      </div>
      <div className="contact-col">
      <form onSubmit={onSubmit}>
        <label>Your Name</label>
        <input type="text" name='name' placeholder='Enter Your name' required></input>
        <label>Phone Number</label>
        <input type="tel" name='phone' placeholder='Enter Your phone number' required></input>
        <label>Write your Message here</label>
        <textarea name="message" rows="6" placeholder='Enter your message'></textarea>
        <button type='submit' className='btn dark-btn'>Submit now<img src={white_arrow} alt=""></img></button>
        
      </form>
      <span>{result}</span>
      </div>
      
    </div>
  )
}

export default Contact
