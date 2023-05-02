import './Home.css';
import Carousel from 'react-bootstrap/Carousel';
import Navigation from '../Navigation/Navigation';

import laurel1 from './dallelaurels/laurel1.png';
import laurel2 from './dallelaurels/laurel2.png';
import laurel3 from './dallelaurels/laurel3.png';
import laurel4 from './dallelaurels/laurel4.png';
import laurel5 from './dallelaurels/laurel5.png';
import laurel6 from './dallelaurels/laurel6.png';
import laurel7 from './dallelaurels/laurel7.png';
import laurel8 from './dallelaurels/laurel8.png';

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

const images = [
  laurel1, laurel2, laurel3, laurel4, laurel5, laurel6, laurel7, laurel8 
];
 
shuffleArray(images);

function laurelCarousel () {
  // todo: import imgs, shuffle, return carousel, use in Home function
  // 
  return (
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
  )

}

function Home() {
  return (
    <div className='home-container'>
      <h1 className="bookshelf-container">lauri paronen</h1>
      <div className="laurel-container">
        {laurelCarousel()}
      </div>
      <Navigation showHomeLink={true} />
    </div>
  )
}

export default Home;