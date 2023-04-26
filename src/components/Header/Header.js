import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';
import Carousel from 'react-bootstrap/Carousel';

import image1  from './images/image1.png'
import image2  from './images/image2.png'
import image3  from './images/image3.png'
import image4  from './images/image4.png'
import image5  from './images/image5.png'
import image6  from './images/image6.png'
import image7  from './images/image7.png'
import image8  from './images/image8.png'
import image9  from './images/image9.png'
import image10 from './images/image10.png'
import image11 from './images/image11.png'
import image12 from './images/image12.png'
import image13 from './images/image13.png'
import image14 from './images/image14.png'
import image15 from './images/image15.png'
import image16 from './images/image16.png'
import image17 from './images/image17.png'
import image18 from './images/image18.png'
import image19 from './images/image19.png'
import image20 from './images/image20.png'
import image21 from './images/image21.png'
import image22 from './images/image22.png'
import image23 from './images/image23.png'
import image24 from './images/image24.png'
import image25 from './images/image25.png'
import image26 from './images/image26.png'
import image27 from './images/image27.png'
import image28 from './images/image28.png'
import image29 from './images/image29.png'
import image30 from './images/image30.png'
import image31 from './images/image31.png'
import image32 from './images/image32.png'
import image33 from './images/image33.png'

// Function for shuffling an array; used to randomize the order of the images
// courtesy of chatGPT
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Create an array called images that contains all the image paths
// from image1 to image33
const images = [
  image1, image2, image3, image4, image5, image6, image7, image8, image9,
  image10, image11, image12, image13, image14, image15, image16, image17,
  image18, image19, image20, image21, image22, image23, image24, image25,
  image26, image27, image28, image29, image30, image31, image32, image33
];

shuffleArray(images);

function Header() {
  return (
    <Carousel defaultInterval={8000}>
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

export default Header;