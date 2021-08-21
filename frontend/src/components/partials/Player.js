import React, { useEffect, useState } from "react";
import SpotifyPlayer from "react-spotify-web-playback";
import styled from "styled-components";
import getSongLyrics from "../../helpers/useLyrics";

const PlayerContainer = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 0 5px;
`;
const Player = ({ accessToken, trackUri }) => {
  const [play, setPlay] = useState(false);

  const handleSongLyrics = async () => {
    const res = await getSongLyrics({title: 'Fiji', artist: 'Taco Hemingway'});
    console.log(res);
  };

  useEffect(() => {
    setPlay(true);
    handleSongLyrics();
  }, [trackUri]);
  return accessToken ? (
    <PlayerContainer>
      <SpotifyPlayer
        token={accessToken}
        showSaveIcon
        play={play}
        callback={(state) => {
          if (!state.isPlaying) setPlay(false);
        }}
        uris={trackUri ? [trackUri] : []}
      />
    </PlayerContainer>
  ) : null;
};

export default Player;
