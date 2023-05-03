import React from "react";
import "./About.css";
import Lauri from "./Lauri.jpg";
import laurelwreath from "./laurelwreath.jpg";

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
            I like cats, art, nature, music, metaphysical contemplation, wandering aimlessly
            in a forest with a stick, self-transcendence, seafood, matcha, writing, 
            challenging my presumptions about life, burning incense, sunbathing,
            all manner of mysticism, and creamy Greek yogurt with honey and cacao nibs.
            <br /><br />
            Sometimes I make music. You can find my audial creations and explorations <a className="list"
            href="/music"
            target="_blank"
            style={{color: "inherit"}}
            >here</a>.
            <br /><br />
            Sometimes I write out and publish my thoughts in long form. You can find them <a className="list"
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
            <a href="https://github.com/lauriparonen/portfolio"
            target="_blank"
            style={{color: "inherit"}}>
            I made this website with React.js
            </a>.
            
            <br />
            Some of my other projects include:
            <br /><br />
            <ul className="projects-list">
                <li className="projects-list-item">

                 <a className="list"
                    href="https://github.com/lauriparonen/GIndexScraper"
                    target="_blank"
                    style={{color: "inherit"}}
                    ><i>GIndexScraper</i>, a Node.js script which scrapes the price of
                    Gambina
                </a> (a Finnish alcoholic beverage and an <a className="list"
                    target="_blank"
                    style={{color: "inherit"}}
                    href="https://www.gambina.fi/"> 
                    an academic elixir</a>)
                    from the website of the Finnish alcohol monopoly Alko
                    </li>
                    <li className="projects-list-item">
                    <a className="list"
                        href="https://github.com/lauriparonen/thinkboi-tweeter-desktop"
                        target="_blank"
                        style={{color: "inherit"}}
                        ><i>thinkboi tweeter</i>, a desktop Twitter interface</a> for sending short one-liner
                        tweets from your desktop (made with Python and PyQt5).
                        tweet like <a href="https://twitter.com/naval"
                                      target="_blank"
                                      style={{color:"inherit"}}>
                            Naval Ravikant</a>, without subjecting yourself to the informational cacophony of 
                        the Twitter feed
                    </li>
                    <li className="projects-list-item">
                    <a className="list"
                        href="https://github.com/lauriparonen/thinkboi-tweeter-react"
                        target="_blank"
                        style={{color: "inherit"}}
                        >a React.js browser version</a> of the above (wip)
                    </li>
                </ul>

            <br /><br />
            I am currently studying computer science at the University of Tampere,
            but my intellectual curiosity tends to greatly transcend the constraints
            of the traditional institutional academia.
            <br /><br />
            If you want to work with me, send pictures of your cat,
            or chat about the nature of reality,
            you can find my contact information & social media links <a className="list"
            href="/contact"
            target="_blank"
            style={{color: "inherit"}}
            >here</a>.
            <br /><br />
            The image carousel on the top of this site is a collection
            of images I have generated with OpenAI's <a className="list"
            href="https://openai.com/product/dall-e-2"
            target="_blank"
            style={{color: "inherit"}}
            >DALL·E 2</a> (a neural network that generates images from text descriptions).
            The <a href="/gallery" className="list" style={{color: "inherit"}}>gallery</a>-section
            shows some more images I've generated with this tool. It's a marvelously fun
            way to bring the contents of one's imagination into manifest reality.

            
        </p>
        <p>
            📿
            
        </p>
        <br />
        </div>
    );
}

export default About;