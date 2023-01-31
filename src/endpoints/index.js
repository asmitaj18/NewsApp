import API_KEY from "../keys";

const endpoints = {
  TOP_HEADLINES: `top-headlines?apiKey=${API_KEY}&pageSize=100`,
  SOURCES: `sources?apiKey=${API_KEY}&pageSize=100`,
  SEARCH_TEXT_URL : `top-headlines?apiKey=${API_KEY}`
};

export default endpoints;
