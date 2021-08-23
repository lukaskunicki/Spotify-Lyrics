import React, { useEffect, useState } from "react";
import SpotifyPlayer from "react-spotify-web-playback";
import styled from "styled-components";

const PlayerContainer = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 9;
`;
const Player = ({ accessToken, trackToPlay }) => {
  const [play, setPlay] = useState(false);

  useEffect(() => {
    setPlay(true);
  }, [trackToPlay]);

  return accessToken ? (
    <PlayerContainer key={trackToPlay} style={{
      pointerEvents: trackToPlay ? 'all' : 'none',
      fontFamily: "Noto Sans"
    }}>
      <SpotifyPlayer
        token={accessToken}
        showSaveIcon
        play={play}
        callback={(state) => {
          if (!state.isPlaying) setPlay(false);
        }}
        uris={trackToPlay ? [trackToPlay] : []}
      />
    </PlayerContainer>
  ) : null;
};

export default Player;
