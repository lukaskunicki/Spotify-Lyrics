import axios from "axios";
import config from "../conf/config";

const getSongLyrics = async (song) => {
  const res = await axios.post(config.API_URL + "/lyrics", { song: song });
  return await res.data.text;
};

export default getSongLyrics;
