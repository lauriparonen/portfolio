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
            <h3 className="bookshelf-list-item-title">Tao Te Ching</h3>
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
            <h3 className="bookshelf-list-item-title">kirjan nimi 2</h3>
            <p className="bookshelf-list-item-author">homokulli</p>
            <p className="bookshelf-list-item-desc">

            </p>
          </div>
          </div>
        </div>
      </div>
  );
}

export default Bookshelf;