import React, { useEffect, useRef } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';
// import contactImg from "../img/paolo.jpg"


function Contact() {
    const form = useRef();
  
    
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm(
          "service_nj5e7zr",
          "template_5mmxnln",
          e.target,
          "kC7OdsU13u-IBkHkW"
        )
        .then((response) => {
          console.log("SUCCESS!", response.status, response);
        })
        .catch((err) => console.log(err))
        .then(() => {
            window.open('Home')
        });
    };

    return (
        <div className="contact component__space" id="Contact">
            <div className="row">
                <div className="col__2">
                    <div className="contact__box">
                        <div className="contact__meta">
                            <h1 className="hire__text">Contact Me.</h1>
                            <p className="hire__text white">I am available for freelance work. Connect with me:</p>
                           <p className="hire__text white"><strong>email <strong>paolosiroko@gmail.com</strong></p>
                        </div>
                        <form className='form' ref={form} onSubmit={sendEmail}>
                        <div className="input__box">
                           <input type="text" className="contact name"  name="name"  placeholder="Your name *" />
                           <input type="text" className="contact email" name="user_email" placeholder="Your Email *" />
                           {/* <input type="text" className="contact subject" placeholder="Write a Subject" /> */}
                           <textarea name="message" id="message"  placeholder="Write Your message"></textarea>
                           <button className="btn" type="submit">Submit</button>
                        </div>
                        </form>
                    </div>
                </div>
                {/* <div className="col__2">
                    <img src={contactImg} alt="" className="contact__img" />
                </div> */}
            </div>
        </div>
    )
}

export default Contact
