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
          I love to read. Here are some of my favorite written works,
          as well as some thoughts about them.
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

          <div className="bookshelf-list-item">
            <h3 className="bookshelf-list-item-title">
              <a href="https://www.ichingonline.net/"
              target="_blank">
                I Ching 
                </a></h3>
            <p className="bookshelf-list-item-author">Unknown author</p>
            <p className="bookshelf-list-item-desc">
              This is one of the more esoteric books on this list.
              It's not so much a book as it is a divination tool, though it
              is also well worth reading for its own sake. It is also known as the Book of Changes,
              indeed change is the most central theme of this book. <br /><br />
              The logic of the I Ching is broadly as follows. You choose a question
              about your present circumstances, and then using some method of randomization,
              you generate a hexagram (consisting of six lines, each of which can be either 
              broken (yin) or unbroken (yang)). You then look up the hexagram in the book,
              and read the corresponding text. In the text you will find 
              a broad, very vague description of something, which you
              then project an interpretation into about the question
              you asked. It is thus a tool for exercising, in a 
              certain sense externalizing one's intuition.<br /><br />
              The link above in the title takes you to a website where you 
              can cast virtual coins to generate a hexagram if you want to try it out. 
            </p>
            </div>
          </div>

          <div className="bookshelf-list-item">
            <h3 className="bookshelf-list-item-title">
              <a href="https://www.amazon.com/Incerto-Deluxe-Randomness-Procrustes-Antifragile/dp/198481981X"
              target="_blank">
                Incerto
                </a></h3>
            <p className="bookshelf-list-item-author">Nassim Nicholas Taleb</p>
            <p className="bookshelf-list-item-desc">
              This is a collection of five books on the nature of randomness and uncertainty: <i>Fooled by Randomness</i>, <i>The Black Swan</i>, <i>The Bed of Procrustes</i>, <i>Antifragile</i> and <i>Skin in the Game</i>. <br></br>
              <br /> They are all worth reading; Taleb is a very entertaining writer, 
              and he does not fear to state his observations strongly (I find him 
              much more palatable when I only pay attention to his written work, 
              as opposed to his Twitter account). <br /><br /> 
              A particular favorite of mine is the collection of aphorisms that is 
              <i> The Bed of Procrustes</i>; my favorite one being the following: <br /><br /> 
              <p>
            <i>
              <a href='https://www.goodreads.com/quotes/9193454-what-fools-call-wasting-time-is-most-often-the-best'
                target={"_blank"}
                className='home-links'
                >
              What fools call "wasting time" is most often the best investment. 
              </a>
            </i> 
          </p>
            </p>
            </div>

          <div className="bookshelf-list-item">
            <h3 className="bookshelf-list-item-title">
              <a href="https://www.goodreads.com/book/show/24113.G_del_Escher_Bach"
              target="_blank">
                Gödel, Escher, Bach: An Eternal Golden Braid
                </a></h3>
            <p className="bookshelf-list-item-author">Douglas Hofstadter</p>
            <p className="bookshelf-list-item-desc">
              This is an extraordinary book about the phenomenon of self-reference,
              something which seems to be an unescapable feature of reality as 
              well as consciousness of it. Though it is a long and at times very challenging
              read, it is also very entertaining and delightful.
            </p>
            </div>

          <div className="bookshelf-list-item">
            <h3 className="bookshelf-list-item-title">
              <a href="https://breedlove22.medium.com/the-number-zero-and-bitcoin-4c193336db5b"
              target="_blank">
                The Number Zero and Bitcoin
                </a></h3>
            <p className="bookshelf-list-item-author">Robert Breedlove</p>
            <p className="bookshelf-list-item-desc">
              This is an essay by Robert Breedlove, a Bitcoin philosopher and
              entrepreneur. What makes it great is that even if you couldn't
              care less about Bitcoin (though he makes very compelling cases for it),
              it is an extremely insightful essay about the concept of emptiness.
              <br /><br />
              Emptiness is something I find extraordinarily essential to contemplate,
              and it is a shame that in the Western intellectual canon it has been
              completely misunderstood. It is a peculiar expression of our intellectual
              domain-dependence (in the West) that we could without much problems apprehend the concept
              of zero in mathematics; but in our philosophy we have been blind to the 
              very same concept in metaphysics. Though it should be said that the concept
              of zero originated in India, in the very same intellectual tradition
              which birthed Buddhism as well as its conception of <i>sunyata</i> (emptiness);
               and we only got to it later on through inheriting the 
              numeral system that the people of India invented. <br /><br />
            </p>
            </div>

          <div className="bookshelf-list-item">
            <h3 className="bookshelf-list-item-title">
              <a href="https://terebess.hu/english/tao/Zhuangzi-Burton-Watson.pdf" 
              target="_blank">
                Zhuangzi
                </a></h3>
            <p className="bookshelf-list-item-author">Zhuangzi</p>
            <p className="bookshelf-list-item-desc">
              Another book from the Chinese intellectual tradition of Taoism.
              Just as the Tao Te Ching, this book always seem to bring 
              forth something new each time I read it. It's quite as if
              one can never actually fully read it;
              it has this peculiar element of inexhaustability, a quality
              which Laozi notes is pertinent to the Tao itself in  <a 
              href="https://www.wussu.com/laotzu/laotzu35.html" 
              style={{color: "inherit"}}
              target="_blank"
              >the 35th chapter of the Tao Te Ching:</a><br /><br />
              <i style={{fontSize: 15}}>
              Passers by may stop for music and good food, <br/>
              But a description of the Tao seems without substance or flavor.<br/>
              It cannot be seen, it cannot be heard,<br/>
              And yet it cannot be exhausted.
              </i>
              <br /><br />
              Zhuangzi uses humor and goes to great lengths to be 
              unconventional in his writing, and this is a very refreshing
              quality in any philosophical work.
            </p>
            </div>
        </div>

          <div className="bookshelf-list-item">
            <h3 className="bookshelf-list-item-title">
              < a href="http://www.psychedelic-library.org/alchemy.htm" 
              target="_blank">
                The New Alchemy
                </a></h3>
            <p className="bookshelf-list-item-author">Alan Watts</p>
            <p className="bookshelf-list-item-desc">
              This is an essay by Alan Watts, a British-American philosopher
              of the psychology of religion. It is a prosaic reflection on LSD,
              and the metaphysical significance of the psychedelic experience in general.
              <br /><br />
              <i style={{fontSize: 15}}>"But just as the work of transforming lead into gold was in many 
                cases a chemical symbolism for a spiritual transformation of man 
                himself, so the immortality to be conferred by the elixir was not 
                always the literally everlasting life but rather the transportation 
                of consciousness into a state beyond time."</i>

            </p>
            </div>

        <div className="bookshelf-list">
          <div className="bookshelf-list-item">
            <h3 className="bookshelf-list-item-title">
              <a href="https://saifedean.com/books"
              target="_blank">
                The Bitcoin Standard & The Fiat Standard
                </a></h3>
            <p className="bookshelf-list-item-author">Saifedean Ammous</p>
            <p className="bookshelf-list-item-desc">
              These are extraordinarily lucid works about the nature, history
              and societal significance of money; especially what kind of money
              has which kind of effects on all domains of life in society. <br/><br/> <i>The Bitcoin Standard</i> addresses
               the history and most central qualities of all currencies,
               and argues that Bitcoin most fittingly fits all the features
               of good currency. <i>The Fiat Standard</i> is a book about
               the financial standard of our time (20th century onward),
               and offers truly eye-opening insights into the constitution
               of our contemporary world, and how the kind of money
               we use affects the way we value the world we live in.
               <br /><br />
               Saifedean is very smart because he understands that piracy is 
               a great marketing tactic for truly excellent products; 
               I initially read both of these works as pirated epubs on my e-reader,
               and bought hardcover versions of both.
            </p>
            </div>
            </div>

        <div className="bookshelf-list">
          <div className="bookshelf-list-item">
            <h3 className="bookshelf-list-item-title">
              <a href="https://www.goodreads.com/book/show/551520.The_Wisdom_of_Insecurity"
              target="_blank">
                The Wisdom of Insecurity: A Message for an Age of Anxiety
                </a></h3>
            <p className="bookshelf-list-item-author">Alan Watts</p>
            <p className="bookshelf-list-item-desc">
              This is one of my favorite works from Alan Watts.
              It is an attempt to articulate his understanding of 
              the intrinsic forms of Eastern religion and metaphysics
              in a language that doesn't require the reader to be
              versed in them. <br /><br />
              
              </p> 
              </div>
              </div>

              <div className="bookshelf-list">
          <div className="bookshelf-list-item">
            <h3 className="bookshelf-list-item-title">
              <a href="https://en.wikipedia.org/wiki/Tsurezuregusa"
              target="_blank">
                Tsurezuregusa (徒然草, <i>Essays in Idleness</i>)
                </a></h3>
            <p className="bookshelf-list-item-author">Yoshida Kenkō</p>
            <p className="bookshelf-list-item-desc">
  
              This is a classic work of Japanese literature, written by a Buddhist monk
              in the 14th century. It is a collection of essays, dealing with
              Buddhist themes and truths, as well as the author's broader 
              reflections on life.
              </p> 
              </div>
              </div>    
        </div>

            
  );
}

export default Bookshelf;