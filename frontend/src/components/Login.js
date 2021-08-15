import React from "react";
import useGetParameters from "../helpers/useGetParameters";
import styled from "styled-components";

const Login = (props) => {
  const BASE_URL = "https://accounts.spotify.com/authorize";
  const params = {
    client_id: "e2f5bc73916845cca657f51299b431a6",
    response_type: "code",
    redirect_uri: "http://localhost:3000",
    scope:
      "streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-stat",
  };
  const AUTH_URL = BASE_URL + useGetParameters(params);

  const FullHeightContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  `;

  const LoginLink = styled.a`
    padding: 25px 15px;
    font-size: 24px;
    background: #1db954;
    color: #fff;
    border-radius: 10px;
    transition-property: background, color;
    transition: all 200ms ease;
    cursor: pointer;
    text-decoration: none;

    :hover {
      background: #fff;
      color: #1db954;
      border: 2px solid #1db954;
    }
  `;

  return (
    <FullHeightContainer>
      <LoginLink href={AUTH_URL}>Login to Spotify</LoginLink>
    </FullHeightContainer>
  );
};

export default Login;
