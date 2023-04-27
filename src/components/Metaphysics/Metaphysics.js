import React from "react";
import "./Metaphysics.css";

function Metaphysics() {
    return (
        <div className="bookshelf-container"> {/* reusing styles from Bookshelf.css */}
        <h1 className="page-title">metaphysics</h1>
        <p className="bookshelf-list-item-desc">
            I think philosophy is best thought of as a form of art.
            I conceive art as something wherein a human being serves 
            as a conduit for something novel seeking to express itself,
            to find a material form. In all true art, there are two
            central and essential elements: some expressive skill the artist
            has developed and seeks to master; and something which the artist
            is sensitive to that the people around him are quite not, which 
            the artist's task is to dress into a perceptible form. <br /><br />
            For me, something describable as philosophy seems to be something
            equivalent; particularly questions related to metaphysics; 
            the most fundamental questions of existence. 

            <br /><br />
            With these words in mind, I invite you to explore some of my thoughts
            in longer form:      
        </p>
        
        <iframe
            src="https://foodofthegods.substack.com/embed"
            width="480"
            height="320"
            style={{ border: '1px solid #EEE', background: 'white' }}
            frameborder="0"
            scrolling="no"
        ></iframe>
        <br />

        
        <p className="bookshelf-list-item-desc">
            These words are not written in hopes of convincing anyone of a specific systematic school of thought's superiority to another;
            they are not written as an attempt to communicate something profound, though their form as essays would intuitively 
            make one think otherwise. They are simply my artistry: I relate to them in the same way that a paintbrush relates
            to the painter holding it. I feel like the ideas expressed therein do not come from "me"; I can read my own
            writing and feel surprised by it. 
            <br /><br />
            I am greatly inspired by the nondual schools of thought; by the traditions
            Alan Watts referred to as "ways of liberation" such as Zen and Mahayana Buddhism, Taoism, and Advaita Vedanta.
            Topics I often write about include the unity of opposites; self-transcendence;
            emptiness as a positive complement of form; and all manner of perennial philosophical 
            and metaphysical questions.
            <br /><br />
            They are hosted on Substack: you can subscribe to my newsletter, 
            which will deliver each new essay to your email inbox as I publish them;
            or you can simply read them  <a className="list" 
            href="https://foodofthegods.substack.com/"
            target="_blank" 
            style={{color: "inherit"}}          
            >on the website</a> by clicking the name 
            in the embed box above.
            <br /><br />
            I hope you enjoy them.

        </p>
        </div>

        
    );
}

export default Metaphysics;