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
            on anyone's head; just as my name is just a way to decorate the emptiness
            that is reality.
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
                Mostly I've been using JavaScript and
                Python, but I am also familiar with Java, C++, 
            <br /><br />
            I am currently studying computer science at the University of Tampere.
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