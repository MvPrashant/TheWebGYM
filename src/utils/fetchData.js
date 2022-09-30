export const exerciseOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
      'X-RapidAPI-Key': '8d83a6ad5emsh19104ace07ef82ep1310e2jsne83d2cf71faa'
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