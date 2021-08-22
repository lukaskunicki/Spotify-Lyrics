import { getLyrics } from "genius-lyrics-api";

const getSongLyrics = async (song) => {
  const queryOptions = {
    apiKey: "STDVqCKQcRjydo2OMsA-YTW-H_kPOoSbJph1EHviftI_NWeDhjsJUtqGru7CJsm4",
    title: song.title,
    artist: song.artist,
    optimizeQuery: true,
  };
  return await getLyrics(queryOptions);
};

export default getSongLyrics;