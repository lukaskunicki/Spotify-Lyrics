import React from "react";
import styled from "styled-components";

const TracksList = styled.div`
  max-width: 500px;
  width: 100%;
  margin: 0 auto;
  overflow-y: scroll;
  height: 400px;
  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
  &::-webkit-scrollbar-thumb {
    background: #888;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;
const SingleTrackContainer = styled.div`
  display: flex;
  padding: 5px;
  &:hover {
    cursor: pointer;
    background: grey;
    transition-property: background;
    transition-duration: 0.2s;
    background: #00000015;
  }
`;
const AuthorImageContainer = styled.div`
  width: 25%;
  & > img {
    width: 100%;
  }
`;
const AuthorDataContainer = styled.div`
  width: 75%;
  padding: 0 25px;
  & > .song-title {
    text-align: left;
  }
  & > .song-author {
    text-align: left;
  }
`;

const TrackList = ({ searchResults, trackHandler }) => {
  return (
    <TracksList>
      {searchResults.map((singleTrack) => {
        return (
          <SingleTrackContainer
            key={singleTrack.uri}
            onClick={() => trackHandler(singleTrack)}
          >
            <AuthorImageContainer>
              <img
                src={singleTrack.thumbnail.url}
                alt={`${singleTrack.name} icon`}
              />
            </AuthorImageContainer>
            <AuthorDataContainer>
              <h3 className="song-title">{singleTrack.title}</h3>
              <p className="song-author">{singleTrack.artist}</p>
            </AuthorDataContainer>
          </SingleTrackContainer>
        );
      })}
    </TracksList>
  );
};

export default TrackList;
