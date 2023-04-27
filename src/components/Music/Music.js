import React from 'react';
import './Music.css';

function Music() {
  return (
    <div className="music-container">
      <h2 className='music-title'>music</h2>
      <p className='music-desc'>
        I've been making sounds on my computer for some seven years now.
        <br />
        here you can find what I have posted on soundcloud and spotify, 
        as well as some playlists I've curated.
        <br />
        I might be open to collaborations, so if you like what you hear,
        feel free to contact me. 
        <br /> <br />
        enjoy!
      </p>
      <p className='music-link-desc'>
        here's a playlist of my music on SoundCloud: <br />
      </p>
      <iframe className='music-playlist'
        title="soundCloud"
        height="300"
        width="40%"
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
        height="300"
        width="40%"
        frameborder="0"
        allowtransparency="true"
        allow="encrypted-media"
      ></iframe>
      <p className='music-link-desc'> 
        here's a playlist of ambient music I really like: <br />
      </p>
      <iframe className='music-playlist'
        title="ambient"
        src="https://open.spotify.com/embed/playlist/6aweRyoJSHdoXZwU38v1Vs?utm_source=generator"
        height="300"
        width="40%"
        frameborder="0"
        allowtransparency="true"
        allow="encrypted-media"
      ></iframe>
      <p className='music-link-desc'>
        I adore deep, atmospheric techno too.
        here are some tracks I enjoy: <br />
      </p>
      <iframe className='music-playlist'
        title="deep techno"
        src="https://open.spotify.com/embed/playlist/2TCqzNDLdvIU9uIaFeID56?utm_source=generator"
        frameborder="0"
        width="40%"
        height="300"
        allowtransparency="true"
        allow="encrypted-media"
      ></iframe>
    </div>
  );
}

export default Music;
