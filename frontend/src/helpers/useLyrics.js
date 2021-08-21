import { getLyrics } from "genius-lyrics-api";

const getSongLyrics = async (song) => {
  const queryOptions = {
    apiKey: "1w5Wgo9yv_5Zik8AKSq8Exsk0rr6n8vn4XKHIZN7LZ5oYy4gEAt4sTRLFg8dseF-",
    title: song.title,
    artist: song.artist,
    optimizeQuery: true,
  };
  const lyrics = await getLyrics(queryOptions);
  console.log(lyrics);
};

export default getSongLyrics;