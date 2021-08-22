import React, { useEffect, useState } from "react";
import useAuth from "../helpers/useAuth";
import SearchBar from "./partials/SearchBar";
import TrackList from "./partials/TrackList";
import Player from "./partials/Player";
import Lyrics from "./partials/Lyrics";
import SpotifyWebApi from "spotify-web-api-node";
import getSongLyrics from "../helpers/useLyrics";

const spotifyApi = new SpotifyWebApi({
  clientId: "e2f5bc73916845cca657f51299b431a6",
});

const Dashboard = ({ code }) => {
  const accessToken = useAuth(code);
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [playingTrack, setPlayingTrack] = useState(null);
  const [songLyrics, setSongLyrics] = useState(null);

  useEffect(() => {
    if (!accessToken) return;
    spotifyApi.setAccessToken(accessToken);
  }, [accessToken]);

  useEffect(() => {
    if (!searchValue) return setSearchResults([]);
    if (!accessToken) return;

    let cancelRequest = false;
    spotifyApi.searchTracks(searchValue).then((response) => {
      if (cancelRequest) return;
      const items = response.body.tracks.items;
      const newSearchResults = items.map((singleTrack) => {
        const thumbnails = singleTrack.album.images.sort(
          (a, b) => a.height < b.height
        );

        return {
          artist: singleTrack.artists[0].name,
          title: singleTrack.name,
          uri: singleTrack.uri,
          thumbnail: thumbnails[0],
        };
      });
      setSearchResults(newSearchResults);
    });
    return () => (cancelRequest = true);
  }, [searchValue, accessToken]);

  const handleTrack = async (track) => {
    setPlayingTrack(track);
    const lyrics = await getSongLyrics({
      title: track.title,
      artist: track.artist,
    });
    setSearchResults("");
    setSongLyrics(lyrics);
  };

  const handleSearchValue = (e) => setSearchValue(e.target.value);

  return (
    <>
      <SearchBar
        searchValue={searchValue}
        searchValueHandler={handleSearchValue}
      />
      {searchResults.length ? (
        <TrackList searchResults={searchResults} trackHandler={handleTrack} />
      ) : null}
      <Player accessToken={accessToken} trackToPlay={playingTrack?.uri} />
      {songLyrics ? <Lyrics text={songLyrics} /> : null}
    </>
  );
};
export default Dashboard;
