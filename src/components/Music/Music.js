import React from 'react';

function Music() {
  return (
    <div className="music-container">
      <h2>music</h2>
      <p>
        i've been making sounds on my computer for some seven years now.
        <br />
        here you can find what i have posted on soundcloud and spotify.
        <br />
        i am open to collaborations, so if you like what you hear,
        feel free to contact me. 
        <br />
        enjoy!
      </p>
      <iframe
        title="soundCloud"
        width="100%"
        height="300"
        scrolling="no"
        frameborder="no"
        allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/lamiatunes&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true"
      ></iframe>
      <iframe
        title="spotify"
        src="https://open.spotify.com/embed/artist/6b1HmB9aQHT0nEXpB02pEm?utm_source=generator&theme=0"
        width="100%"
        height="300"
        frameborder="0"
        allowtransparency="true"
        allow="encrypted-media"
      ></iframe>
      <p> 
        here's a playlist of ambient music I really like: <br />
      </p>
      <iframe
        title="ambient"
        src="https://open.spotify.com/embed/playlist/6aweRyoJSHdoXZwU38v1Vs?utm_source=generator"
        width="100%"
        height="300"
        frameborder="0"
        allowtransparency="true"
        allow="encrypted-media"
      ></iframe>
    </div>
  );
}

export default Music;
