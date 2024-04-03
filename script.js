
//const api_url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=f5c49e3b3070423596c82a7a9546fec1'
//async function getNews() {
//    const response = await fetch(api_url);
//    const data = await response.json();
//    console.log(data)
//}

//getNews()


const api_key = 'f5c49e3b3070423596c82a7a9546fec1';
const api_url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=f5c49e3b3070423596c82a7a9546fec1'


async function getNews() {
    try {
      const response = await fetch(api_url);
      const data = await response.json();
      return data;
    } catch (error) {
        console.log(error);
    }
}