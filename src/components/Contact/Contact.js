import React from "react";
import "./Contact.css";

function Contact() {
    return (
        <div>
        <h1 className="page-title"
        >contact/links</h1>
        <p>
            <a href="mailto: lauriparonen0@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
            >
            email (general)
            </a>
        </p>
        <p>
            <a href="mailto: lamiatunes@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
            >
            email (music)
            </a>
        </p>
        <p>
            <a href="mailto: foodofthegods9@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
            >
            email (philosophy)
            </a>
        </p>

        <p>
            <a href="https://www.linkedin.com/in/ "
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
            >
            linkedin
            </a>
        </p>
        <p>
            <a href="https://github.com/lauriparonen"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
            >
            github
            </a>
        </p>
        <p>
            <a href="https://www.instagram.com/lauri1.618"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
            >
                instagram
            </a>
        </p>
        </div>
    );
}

export default Contact;