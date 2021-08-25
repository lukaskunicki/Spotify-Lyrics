import React from "react";
import styled from "styled-components";
import Typing from "react-typing-animation";

const PlaceholderContainer = styled.div`
  font-size: 32px;
  font-family: "Noto Sans", sans-serif;
  height: 82vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const LyricsPlaceholder = () => {
  return (
    <PlaceholderContainer>
      <Typing>
        <span>The lyrics will be presented here</span>
      </Typing>
    </PlaceholderContainer>
  );
};

export default LyricsPlaceholder;
