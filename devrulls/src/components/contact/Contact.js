import React from "react";
import "../../global_variables.css";
import "./contact.css";


export const Contact = () => {
    return (
        <div className="page">
            <h1>Get in touch</h1>
            <form className="contact">
                <input  className='formInput'
                        type="text"
                        placeholder="Your Name"
                        name="name" />
                <input  className='formInput'
                        type="text"
                        placeholder="Subject"
                        name="subject" />
                <input  className='formInput'
                        type="text"
                        placeholder="Your Email"
                        name="email" />
                <textarea className='formTextArea'
                          rows="5"
                          placeholder="Write a Message"
                          name="message" />
                <input type="submit" className="btnSend" value="Submit"/>
            </form>
        </div>
    )

}