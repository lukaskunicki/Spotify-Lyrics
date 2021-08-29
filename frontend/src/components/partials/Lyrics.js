import React from "react";
import styled from "styled-components";

const LyricsContainer = styled.div`
  height: calc(100vh - 130px);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  & > pre {
    padding: 3em 2em 0;
    white-space: pre-wrap;
    max-width: 700px;
    margin: 0 auto;
    color: #fff;
    font-size: 20px;
    font-family: "Noto Sans", sans-serif;
    text-align: center;
    line-height: 1.8;
    overflow-y: scroll;
    height: calc(100vh - 250px);
    text-shadow: 1px 1px 1px white;
    overflow-x: hidden;
    &::-webkit-scrollbar {
      width: 10px;
    }
    &::-webkit-scrollbar-track {
      background: #f1f1f122;
    }
    &::-webkit-scrollbar-thumb {
      background: #888;
    }
    &::-webkit-scrollbar-thumb:hover {
      background: #555;
    }
  }
`;
const Lyrics = ({ text, backgroundImage }) => {
  return (
    <LyricsContainer
      style={{
        background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),url(${backgroundImage.url}) center`,
      }}
    >
      <pre>{text}</pre>
    </LyricsContainer>
  );
};

export default Lyrics;
