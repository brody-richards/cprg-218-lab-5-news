
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
      return data.articles;
    } catch (error) {
        console.log(error);
    }
}


// Populate dropdown list with articles //

async function renderOption1Dropdown() {
    const select = document.getElementById("dropdown");
    const articles = await getNews();
    if (articles) {
        articles.forEach((article) => {
            const option = document.createElement("option");
            option.textContent = article.title;
            option.value = article.url;
            select.appendChild(option);
        });
    }
}



// Attach Event Listener to the submit button //


const submitButton = document.getElementById('submit-button');
submitButton.addEventListener('click', submitButtonClickHandler);


// Populate UL based on category selection - stuck here i think





















