function searchNews() {
    const searchTerm = document.getElementById("searchInput").value;
    fetch(`/api/v1/news/search?title=${searchTerm}`)
        .then(response => response.json())
        .then(news => displayNews(news))
        .catch(error => console.error('Error fetching news:', error));
}

function displayNews(news) {
    const newsContainer = document.getElementById("news-container");
    newsContainer.innerHTML = '';

    news.forEach(item => {
        const newsItem = document.createElement('div');
        newsItem.classList.add('news-item');

        const title = document.createElement('h3');
        title.textContent = item.title;

        const description = document.createElement('p');
        description.textContent = item.description;

        const url = document.createElement('a');
        url.textContent = "Read More";
        url.href = item.url;
        url.target = "_blank";

        newsItem.appendChild(title);
        newsItem.appendChild(description);
        newsItem.appendChild(url);

        newsContainer.appendChild(newsItem);
    });
}
