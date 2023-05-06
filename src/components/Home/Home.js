import './Home.css';
import Carousel from 'react-bootstrap/Carousel';

import laurel1 from './dallelaurels/laurel1.png';
import laurel2 from './dallelaurels/laurel2.png';
import laurel3 from './dallelaurels/laurel3.png';
import laurel4 from './dallelaurels/laurel4.png';
import laurel5 from './dallelaurels/laurel5.png';
import laurel6 from './dallelaurels/laurel6.png';
import laurel7 from './dallelaurels/laurel7.png';
import laurel8 from './dallelaurels/laurel8.png';

function shuffleArray(array) {

  /**
   * This function shuffles the image array.
   * 
   * @param {array} array - the array to be shuffled
   * @returns null
   */

  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Create an array called images that contains all the imported images
const images = [
  laurel1, laurel2, laurel3, laurel4, laurel5, laurel6, laurel7, laurel8 
];
 
// Shuffle the images
shuffleArray(images);

function laurelCarousel () {

  /**
   * This function renders the laurel carousel displayed on the home page.
   * It uses the react-bootstrap Carousel component.
   * 
   * @returns the laurel carousel
   */
  return (
    <div className="laurel-container">
    <Carousel className="laurel-carousel" defaultInterval={8000} fade={"0.3s"}>
      {images.map((image, index) => (
        <Carousel.Item key={index}>
          <img 
            className="d-block w-100"
            src={image}
            alt={`Slide ${index + 1}`}
          />
        </Carousel.Item >
      ))}
    </Carousel>
    <div className="laurel-text"
      style={{
        position: "relative",
        left: "0",
        maxWidth: "100%",
        height: "100%",
        textAlign: "center",
        fontSize: "0.8em",
        fontStyle: "italic",
      }}
    >
      <p>
        <br />
        "oil painting of a laurel wreath against a background of the sky", DALL·E 2 
        <br />
        the laurel wreath is a symbol of victory and honor
        <br />
        <br />
        🌿
        </p>
    </div>
    </div>
    
  )

}

function Home() {

  /**
   * This function renders the home page.
   * 
   * @returns the home page
   */

  return (
    <div className='home-container'>
      <h1 className="bookshelf-container">lauri paronen</h1>
      <div className="laurel-container">
        {laurelCarousel()}
      </div>
      {/* <Navigation showHomeLink={true} /> */}
      <div className="home-text">
        <p>
          <br />
          I'm a 22-year-old student of computer science currently based in Tampere, Finland.
          <br />
          <br />
          I enjoy all manner of creative pursuits, such as writing, music, art, 
          philosophy and programming.
          You can find my creations and other things I enjoy on this website.
          <br />
          <br />
          The <a href="/about" className='home-links'
              >about</a>-page contains a more detailed description of me and my interests.
          <br />
          <br />
          The <a href="/music" className='home-links'
              >music</a>-page contains links to my music,
              as well as some of the playlists I've curated with songs I enjoy.
          <br />
          <br />
          The <a href="/metaphysics" className='home-links'
              >metaphysics</a>-page contains 
               a link to my longer-form philosophical reflections.
          <br />
          <br />
          The <a href="/bookshelf" className='home-links'
              >bookshelf</a>-page contains a list of books I have
              enjoyed, as well as some of my thoughts on them. 
          <br />
          <br />
          The <a href="/gallery" className='home-links'
              >gallery</a>-page contains a gallery of some of my favorite
              images I've generated with OpenAI's DALL·E 2. 
          <br />
          <br />
          The <a href="/contact" className='home-links'
              >contact</a>-page contains my contact information.
          <br />
          <br />
          📿🌺🌳🍀🌸🕸️☄️🃏🖼️🔱
          <br />
          <br />
          
          </p>
      </div>

    </div>
  )
}

export default Home;