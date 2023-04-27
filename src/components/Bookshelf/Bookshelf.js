// this component will display my favorite books
//
// Path: src\components\Bookshelf\Bookshelf.js

import React from "react";
import "./Bookshelf.css";

function Bookshelf() {
  return (
    <div className="bookshelf-container">
      <h1 className="page-title">bookshelf</h1>
      <div className="bookshelf">
        <p className="bookshelf-desc">
          I love to read. Here are some of my favorite books.
        </p>
        <div className="bookshelf-list">
          <div className="bookshelf-list-item">
            <h3 className="bookshelf-list-item-title">
              <a href="https://www.with.org/tao_te_ching_en.pdf"
              target="_blank"
              >Tao Te Ching
              </a></h3>
            <p className="bookshelf-list-item-author">Laozi</p>
            <p className="bookshelf-list-item-desc">
              This is a quintessential book. No other work of literature
              has the same effect: owing to the ambiguity of the Ancient
              Chinese language it was written in, every single translation of this book 
              is different; yet each translation seems to carry the 
              same essential message, while still bringing forth something novel
              from each translator. <br />
              <br />
              Owing to the subtlety and ambiguity of the language, this book 
              requires a certain readjustment in one's expectations about it,
              indeed about reality itself.
              It is something that grows with you; every time I revisit it, it's
              as if I read something new. But this itself is testimonial of this 
              work's alignment with its essential metaphysical message of the Tao:
              like the uncarved block or unbleached silk (in Zen metaphors),
              its absence of well-defined and constrained form allows it to 
              draw novel forms from everyone who encounters it.<br />
            </p>
          </div>
          <div className="bookshelf-list-item">
            <h3 className="bookshelf-list-item-title">
              <a 
              href="https://en.wikisource.org/wiki/Fragments_of_Heraclitus"
              target="_blank">
                Fragments
                </a></h3>
            <p className="bookshelf-list-item-author">Heraclitus</p>
            <p className="bookshelf-list-item-desc">
              This obscure work, assembled from whatever was left of 
              the intellectual output of the Ancient Greek philosopher
              Heraclitus, is similar to the Tao Te Ching in many respects.
              Heraclitus is my favorite philosopher of the Western canon for
              exactly this reason; the constrained and random nature of the
              fragments that remain of his work force the reader to 
              contemplate, drawing novel interpretations not so much from the 
              text as from their own mind. <br /><br />
              Heraclitus is also one of the few Western philosophers who
              apprehended the <i>unity of opposites</i>. This is a concept
              discovered by the Ancient Chinese, notoriously represented in the
              yin-yang symbol. It is a concept that is so essential and fundamental
              to the nature of reality that it escapes most of us. Alan Watts,
              my favorite philosopher of the 20th century, called it the only 
              metaphysical lesson one needs to learn: that all fronts
              come with backs, and all ups come with downs. Quoting
              Heraclitus' 60th fragment, "The way up and the way down is one and the same."  <br /><br />
            </p>
          </div>
          </div>
        </div>
      </div>
  );
}

export default Bookshelf;