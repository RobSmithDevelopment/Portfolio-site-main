import React from "react";

const Contact = () => {
    return (
        <div className="contact-container">
            <h1 className="contact-h1"> Contact Me!</h1>
            <p className="contact-p">Thanks for stopping by. <br/> <span>Lets talk about your project!</span></p>
            <form action="https://formsubmit.co/roba.smith@hotmail.com" method="POST">
                <label for="name">Name:</label>
                <input className="contact-input" type="text" id="name" name="name" required></input>
                <br/>
                <label for="last-name">Last Name:</label>
                <input className="contact-input"  type="text" id="last-name" name="last-name" required></input>
                <br/>
                <label for="email">Email:</label>
                <input className="contact-input"  type="email" id="email" name="email" required></input>
                <br/>
                <label for="message">Message:</label>
                <textarea id="message" name="message" required></textarea>
                <br/>
                <button className="contact-button" type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Contact;