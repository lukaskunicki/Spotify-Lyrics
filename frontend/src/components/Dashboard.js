import React, { useEffect, useState } from "react";
import useAuth from "../helpers/useAuth";
import SearchBar from "./partials/SearchBar";
import TrackList from "./partials/TrackList";
import Player from "./partials/Player";
import Lyrics from "./partials/Lyrics";
import SpotifyWebApi from "spotify-web-api-node";
import getSongLyrics from "../helpers/useLyrics";
import Loader from "react-loader-spinner";

const spotifyApi = new SpotifyWebApi({
  clientId: "e2f5bc73916845cca657f51299b431a6",
});

const Dashboard = ({ code }) => {
  const accessToken = useAuth(code);
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [playingTrack, setPlayingTrack] = useState(null);
  const [songLyrics, setSongLyrics] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

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
        console.log(singleTrack.album.images)
        const thumbnails = singleTrack.album.images.sort(
          (a, b) => a.height < b.height
        );

        return {
          artist: singleTrack.artists[0].name,
          title: singleTrack.name,
          uri: singleTrack.uri,
          backgroundImage: thumbnails[0],
          thumbnail: thumbnails[thumbnails.length - 1]
        };
      });
      setSearchResults(newSearchResults);
    });
    return () => (cancelRequest = true);
  }, [searchValue, accessToken]);

  const handleTrack = async (track) => {
    setPlayingTrack(track);
    console.log(track)
    setSearchResults("");
    setIsLoading(true);
    const lyrics = await getSongLyrics({
      title: track.title,
      artist: track.artist,
    });
    setSongLyrics(lyrics);
    setIsLoading(false);
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
      {songLyrics ? (
        <Lyrics text={songLyrics} backgroundImage={playingTrack?.backgroundImage} />
      ) : isLoading ? (
        <Loader type="ThreeDots" color="#1DB954" height={'100vh'} />
      ) : null}
    </>
  );
};
export default Dashboard;
