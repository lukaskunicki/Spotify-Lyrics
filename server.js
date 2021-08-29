require("dotenv").config();
const geniusApi = require("genius-lyrics-api");
const express = require("express");
const SpotifyWebApi = require("spotify-web-api-node");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");
app.use(bodyParser.json());

app.post("/login", (req, res) => {
  const code = req.body.code;
  const spotifyApiInstance = new SpotifyWebApi({
    redirectUri: process.env.REDIRECT_URI,
    clientId: process.env.SPOTIFY_CLIENT_ID,
    clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
  });

  spotifyApiInstance
    .authorizationCodeGrant(code)
    .then((data) => {
      res.json({
        accessToken: data.body.access_token,
        refreshToken: data.body.refresh_token,
        expiresIn: data.body.expires_in,
      });
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(400);
    });
});

app.post("/refresh", (req, res) => {
  const refreshToken = req.body.refreshToken;
  const spotifyApi = new SpotifyWebApi({
    redirectUri: process.env.REDIRECT_URI,
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    refreshToken,
  });

  spotifyApi
    .refreshAccessToken()
    .then((data) => {
      res.json({
        accessToken: data.body.accessToken,
        expiresIn: data.body.expiresIn,
      });
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(400);
    });
});

app.post("/lyrics", (req, res) => {
  const song = req.body.song;
  const queryOptions = {
    apiKey: "STDVqCKQcRjydo2OMsA-YTW-H_kPOoSbJph1EHviftI_NWeDhjsJUtqGru7CJsm4",
    title: song.title,
    artist: song.artist,
    optimizeQuery: true,
  };
  geniusApi
    .getLyrics(queryOptions)
    .then((data) => {
      res.json({ text: data });
    })
    .catch((err) => console.log(err));
});

app.use(express.static(path.join(__dirname, "build")));

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(process.env.PORT || 5000);
