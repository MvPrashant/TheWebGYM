export const exerciseOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
      'X-RapidAPI-Key': 'a570999787msh521e9ebdfd7fad9p107f22jsn1399b98fd10f',
      // 'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY
    }
  };

export const youtubeOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'a570999787msh521e9ebdfd7fad9p107f22jsn1399b98fd10f',
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
  }; 

export const fetchData = async (url,options) => {
  const response = await fetch(url , options);
  const data = await response.json();
  return data;
}