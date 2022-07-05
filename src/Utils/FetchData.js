export const exerciseOptions = {
  //   method: "GET",
  //   headers: {
  //     "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  //     "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
  //   },
  // };
  method: "GET",
  url: "https://exercisedb.p.rapidapi.com",
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const youtubeOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "cb7db58354msh20442dc199ae217p1027dbjsnbe37ece3852d",
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
};
