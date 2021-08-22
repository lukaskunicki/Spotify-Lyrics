import React from "react";
import styled from "styled-components";

const LyricsContainer = styled.div`
  position: relative;
  max-height: 100vh;

  & > pre {
    padding: 3em 2em 7em;
    white-space: pre-wrap;
    max-width: 700px;
    margin: 0 auto;
    position: absolute;
    z-index: 1;
    left: 50%;
    transform: translate(-50%, 0);
    color: #fff;
    font-size: 16px;
    font-family: "Noto Sans", sans-serif;
    text-align: center;
    line-height: 1.5;
    overflow: scroll;
    height: 100vh;
  }
`;
const FallbackImage = styled.img`
  width: 100%;
  left: 50%;
  transform: translate(-50%, 0);
  position: absolute;
  z-index: 0;
  filter: brightness(0.4);
`;
const Lyrics = ({ text, backgroundImage }) => {
  return (
    <LyricsContainer>
      <FallbackImage src={backgroundImage.url} alt="Lyrics background" />
      <pre>{text}</pre>
    </LyricsContainer>
  );
};

export default Lyrics;
