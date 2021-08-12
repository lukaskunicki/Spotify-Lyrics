import React from "react";
import useGetParameters from "../helpers/useGetParameters";

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

  return <div>{AUTH_URL}</div>;
};

export default Login;
