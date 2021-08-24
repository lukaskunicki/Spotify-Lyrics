import React from "react";
import useGetParameters from "../helpers/useGetParameters";
import styled from "styled-components";

const Container = styled.div`
  padding: 4em 0;
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
`;

const Login = (props) => {
  const BASE_URL = "https://accounts.spotify.com/authorize";
  const params = {
    client_id: "e2f5bc73916845cca657f51299b431a6",
    response_type: "code",
    redirect_uri: "http://localhost:3000",
    scope:
      "streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state",
  };
  const AUTH_URL = BASE_URL + useGetParameters(params);

  return (
    <Container>
      <MainHeadline>Spotify Lyrics</MainHeadline>
      <LoginLinkContainer>
      <LoginLink href={AUTH_URL}>Login to Spotify</LoginLink>
      </LoginLinkContainer>
    </Container>
  );
};

export default Login;
