import React from 'react'
import PropTypes from 'prop-types'

import "./styles/Track.css";

// Here we use destructuring to extract the props into separate variables
// See https://wesbos.com/destructuring-objects/
const Track = ({index,title, artist, playtime, albumart, favorite, markFavoriteCallBack, moveToTopCallBack}) => {
  const markFavorite = () => {
    markFavoriteCallBack(index);
  }

  const moveToTop = () => {
    moveToTopCallBack(index);
  }
  return (
    
    <li className="track">
      <img className="track--albumart" alt={`album art for ${title}`} src={albumart} />
      <h3 className="track--title">{title}</h3>
      <input
        onChange={markFavorite}
        type="checkbox"
        className="track--favorite"
        checked={!favorite}
      />
      <p className="track--artist">{artist}</p>
      <p className="track--playtime">{playtime}</p>
      <button
        onClick={moveToTop}
        className="track--control track--to-top"
        >
        <span role="img" aria-label="send to top">🔝</span>
      </button>
      <button
        className="track--control track--switch"
        >
        <span role="img" aria-label="switch lists">↔</span>
      </button>
    </li>
  );
};

Track.propTypes = {
  title: PropTypes.string,
  artist: PropTypes.string,
  playtime: PropTypes.string,
  albumart: PropTypes.string,
  favorite: PropTypes.bool,
}

export default Track;
