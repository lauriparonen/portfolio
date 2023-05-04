import React from 'react';
import './Music.css';

function Music() {
  return (
    <div className="music-container">
      <h1 className='music-title'>music</h1>
      <p className='music-desc'>
        I've been making sounds on my computer for some seven years now.
        <br />
        Here you can find what I have posted on SoundCloud and Spotify, 
        as well as some playlists I've curated.
        <br />
        I might be open to collaborations, so if you like what you hear,
        feel free to contact me. 
        <br /> <br />
        Enjoy!
      </p>
      <p className='music-link-desc'>
        here's a playlist of my music on SoundCloud: <br />
      </p>
      <iframe className='music-playlist'
        title="soundCloud"
        height="352"
        width="50%"
        scrolling="no"
        frameborder="0"
        allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/lamiatunes&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true"
      ></iframe>
      <p className='music-link-desc'>
        and here's my music on Spotify: <br />
      </p>
      <iframe className='music-playlist'
        title="spotify"
        src="https://open.spotify.com/embed/artist/6b1HmB9aQHT0nEXpB02pEm?utm_source=generator&theme=0"
        height="352"
        width="50%"
        frameborder="0"
        allowtransparency="true"
        allow="encrypted-media"
      ></iframe>
      <p className='music-link-desc'>
        this is my favorite song I've made so far. 
        it's an atmospheric ambient track:
      </p>
      <iframe className='music-playlist'
        title="spotify"
        src="https://open.spotify.com/embed/track/1NEcK1vbBzbvLh5SaLnJoh?utm_source=generator"
        height="352"
        width="50%"
        frameborder="0"
        allowtransparency="true"
        allow="encrypted-media"
      ></iframe>
      <h4 className='music-title'><i>playlists</i></h4>
      <p className='music-link-desc'> 
        here's some ambient music I really like.
        perfect for getting sleepy: <br />
      </p>
      <iframe className='music-playlist'
      style={{marginTop: '0rem', marginBottom: '0rem'}}
        title="ambient"
        src="https://open.spotify.com/embed/playlist/6aweRyoJSHdoXZwU38v1Vs?utm_source=generator"
        height="352"
        width="50%"
        frameborder="0"
        allowtransparency="true"
        allow="encrypted-media"
      ></iframe>
      <p className='music-link-desc'>
        I adore deep, atmospheric techno too: <br />
      </p>
      <iframe className='music-playlist'
      style={{marginTop: '0rem', marginBottom: '0rem'}}
        title="deep techno"
        src="https://open.spotify.com/embed/playlist/2TCqzNDLdvIU9uIaFeID56?utm_source=generator"
        frameborder="0"
        width="50%"
        height="352"
        allowtransparency="true"
        allow="encrypted-media"
      ></iframe>
      <p className='music-link-desc'>
        here's some class hip hop:
      </p>
     
      <iframe 
      className='music-playlist'
        style={{marginTop: '0rem', marginBottom: '0rem'}}
        src="https://open.spotify.com/embed/playlist/1M9L5kgUjOXfKWZJ7tLqiV?utm_source=generator" 
        width="50%" 
        height="352" 
        frameBorder="0" 
        allowfullscreen="" 
        loading="lazy"></iframe>
         <p className='music-link-desc'>
          some metal classics:
        </p>  
        <iframe 
        className='music-playlist'
        src="https://open.spotify.com/embed/playlist/4VXylsaC5CPJZJC95ETYcj?utm_source=generator" 
        width="50%" 
        height="352" 
        frameBorder="0" 
        allowfullscreen="" 
        loading="lazy"></iframe>
    </div>
  );
}

export default Music;
