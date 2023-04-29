import React from "react";
import "./About.css";
import Lauri from "./Lauri.jpg";

function About () {
    return (
        <div className="bookshelf-container"> {/* reusing styles from Bookshelf.css */}
        <h1 className="page-title">about</h1>
        <div className="img-container">
            <img className="laurel-img" 
            src={Lauri} 
            alt="painting detail of a hand holding a laurel crown" />
        </div>
        <p className="bookshelf-list-item-desc">
            My name is Lauri. I like to think it comes from a Latin name that means <i>crowned with laurel leaves</i>.
            I am also infatuated with Buddhism and its concept of <i>anatman</i>, or <i>no-self</i>.
            The picture above brings to my mind both of these: the laurel crown rests not 
            on anyone's head; just as my name
            (and the persona it refers to) is just an ephemeral way to decorate the emptiness
            that reality fundamentally is.
            <br /><br />
            I like cats, art, nature, music, metaphysical contemplation, wandering in a forest with a stick, self-transcendence and seafood.
            <br /><br />
            Sometimes I make music. You can find my audial creations and explorations <a className="list"
            href="/music"
            target="_blank"
            style={{color: "inherit"}}
            >here</a>.
            <br /><br />
            Sometimes I write out my thoughts in long form. You can find them <a className="list"
            href="/metaphysics"
            target="_blank"
            style={{color: "inherit"}}
            >here</a>.
            <br /><br />
            Sometimes I write some code. You can find it <a className="list"
            href="https://github.com/lauriparonen"
            target="_blank"
            style={{color: "inherit"}}
            >here</a>,
            in my GitHub. <br />
            I made this website with React.js. 
            <br />
            Some of my projects include:
            <br /><br />
            <ul className="projects-list">
                <li className="projects-list-item">

                 <a className="list"
                    href="https://github.com/lauriparonen/GIndexScraper"
                    target="_blank"
                    style={{color: "inherit"}}
                    >a Node.js script which scrapes the price of
                    Gambina
                </a> (a Finnish alcoholic beverage; <a className="list"
                    target="_blank"
                    style={{color: "inherit"}}
                    href="https://www.gambina.fi/"> 
                    an academic elixir</a>; an unholy concoction)
                    from the website of the Finnish alcohol monopoly Alko
                    </li>
                    <li className="projects-list-item">
                    <a className="list"
                        href="https://github.com/lauriparonen/thinkboi-tweeter-desktop"
                        target="_blank"
                        style={{color: "inherit"}}
                        >a desktop Twitter interface</a> for sending short one-liner
                        tweets from your desktop (made with Python and PyQt5)
                    </li>
                    <li className="projects-list-item">
                    <a className="list"
                        href="https://github.com/lauriparonen/thinkboi-tweeter-react"
                        target="_blank"
                        style={{color: "inherit"}}
                        >a React.js browser version</a> of the above
                    </li>
                </ul>

            <br /><br />
            I am currently studying computer science at the University of Tampere,
            but my intellectual curiosity tends to greatly transcend the constraints
            of the traditional institutional academia.
            <br /><br />
            If you want to work with me, send pictures of your cat,
            or chat about the nature of reality,
            you can find my contact information <a className="list"
            href="/contact"
            target="_blank"
            style={{color: "inherit"}}
            >here</a>.
        </p>
        
        </div>
    );
}

export default About;