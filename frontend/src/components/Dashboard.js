import React, { useEffect, useState } from "react";
import useAuth from "../helpers/useAuth";
import SearchBar from "./partials/SearchBar";
import SpotifyWebApi from "spotify-web-api-node";

const spotifyApi = new SpotifyWebApi({
  clientId: "e2f5bc73916845cca657f51299b431a6",
});

const Dashboard = ({ code }) => {
  const accessToken = useAuth(code);
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (!accessToken) return;
    spotifyApi.setAccessToken(accessToken);
  }, [accessToken]);

  useEffect(() => {
    if (!searchValue) return setSearchResults([]);
    if (!accessToken) return;

    let cancelRequest = false;
    spotifyApi.searchTracks(searchValue).then((response) => {
      if(cancelRequest) return;
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
      console.log(newSearchResults);
      setSearchResults(newSearchResults);
    }, () => cancelRequest = true);
  }, [searchValue, accessToken]);

  const handleSearchValue = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <SearchBar
      searchValue={searchValue}
      searchValueHandler={handleSearchValue}
    />
  );
};
export default Dashboard;
