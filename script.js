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

renderOption1Dropdown()

// Attach Event Listener to the submit button //

async function submitButtonClickHandler(event) {
    console.log(event);
    const url = document.getElementById('dropdown').value;
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data.catagory;
    } catch (error) {
        console.log(error);
    }
}

submitButtonClickHandler();

const submitButton = document.getElementById('submit-button');
submitButton.addEventListener('click', submitButtonClickHandler);