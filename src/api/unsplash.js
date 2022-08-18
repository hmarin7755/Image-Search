import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID D_wOpg-h7KCzxjlPtsZxmDXOC_aDiYwuk-9ssjD8A3o",
  },
});
