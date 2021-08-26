import { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "universal-cookie";
import config from "../conf/config";

const cookies = new Cookies();

const useAuth = (code) => {
  const authCookie = cookies.get("s_l_auth");
  const [accessToken, setAccessToken] = useState(authCookie?.accessToken);
  const [refreshToken, setRefreshToken] = useState(authCookie?.refreshToken);
  const [expiresIn, setExpiresIn] = useState(authCookie?.expiresIn);

  useEffect(() => {
    cookies.set(
      "s_l_auth",
      JSON.stringify({
        accessToken: accessToken,
        refreshToken: refreshToken,
        expiresIn: expiresIn,
      }),
      { path: "/" }
    );
  }, [accessToken, expiresIn, refreshToken]);

  useEffect(() => {
    if (!code) return null;
    axios
      .post(config.API_URL + "/login", {
        code,
      })
      .then((res) => {
        setAccessToken(res.data.accessToken);
        setRefreshToken(res.data.refreshToken);
        setExpiresIn(res.data.expiresIn);
        window.history.pushState({}, null, "/");
      })
      .catch(() => {
        window.location.href = "/";
      });
  }, [code]);

  useEffect(() => {
    if (!refreshToken || !expiresIn) return;

    const interval = setInterval(() => {
      axios
        .post(config.API_URL + "/refresh", {
          refreshToken,
        })
        .then((res) => {
          setAccessToken(res.data.accessToken);
          setExpiresIn(res.data.expiresIn);
        })
        .catch(() => {
          window.location = "/";
        });
    }, (expiresIn - 60) * 1000);

    return () => clearInterval(interval);
  }, [refreshToken, expiresIn]);

  return accessToken;
};

export default useAuth;
