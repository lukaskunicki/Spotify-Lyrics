import React from 'react'
import styled from "styled-components";

const LyricsContainer = styled.div`
  padding: 1em 2em 7em;
`;
const Lyrics = ({text}) => {
  return (
    <LyricsContainer>
      <pre>
        {text}
      </pre>
    </LyricsContainer>
  )
}

export default Lyrics
