import React from "react";
import useGetParameters from "../helpers/useGetParameters";
import styled from "styled-components";
import config from "../conf/config";

const Container = styled.div`
  padding: 4em 2em;
  @media (max-width: 768px) {
    padding: 1em;
  }
`;
const LoginLinkContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const LoginLink = styled.a`
  padding: 0.8em 1.3em;
  font-size: 2em;
  background: #1db954;
  color: #fff;
  border-radius: 10px;
  transition-property: background, color;
  transition: all 200ms ease;
  cursor: pointer;
  text-decoration: none;
  display: inline-block;
  margin: 1em auto;
  font-family: "Noto Sans", sans-serif;
  :hover {
    background: #fff;
    color: #1db954;
    border: 2px solid #1db954;
  }
`;

const MainHeadline = styled.h1`
  font-family: "Noto Sans", sans-serif;
  width: 100%;
  text-align: center;
  font-size: 5em;
  @media (max-width: 768px) {
    font-size: 4em;
  }
`;

const MainDescription = styled.p`
  font-family: "Noto Sans", sans-serif;
  width: 100%;
  text-align: center;
  font-size: 1.5em;
`;

const CopyRights = styled.div`
  position: absolute;
  width: 100%;
  height: 82px;
  bottom: 0;
  text-align: center;
  font-family: "consolas";
  font-family: 14px;
  padding: 10px 0;
  left: 0;

  & > svg {
    width: 20px;
  }
`;

const Login = (props) => {
  const BASE_URL = "https://accounts.spotify.com/authorize";
  const params = {
    client_id: config.CLIENT_ID,
    response_type: "code",
    redirect_uri: config.REDIRECT_URI,
    scope:
      "streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state",
  };
  const AUTH_URL = BASE_URL + useGetParameters(params);

  return (
    <Container>
      <MainHeadline>Spotify Lyrics</MainHeadline>
      <MainDescription>
        Listen to your favourite songs and follow the lyrics
      </MainDescription>
      <LoginLinkContainer>
        <LoginLink href={AUTH_URL}>Login to Spotify</LoginLink>
      </LoginLinkContainer>
      <CopyRights>
        <p>&copy; lukaskunicki </p>
        <p>
          <a href="https://github.com/lukaskunicki">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
        </p>
      </CopyRights>
    </Container>
  );
};

export default Login;
