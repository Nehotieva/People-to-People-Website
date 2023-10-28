document.addEventListener('DOMContentLoaded', function () {
    const newsList = document.getElementById('news-list');

    // Завантаження даних з JSON-файлу для анонсів новин
    fetch('../news.json')
        .then(response => response.json())
        .then(newsData => {
            // Відобразити анонси новин
            newsData.forEach(news => {
                const listItem = document.createElement('li');
                const link = document.createElement('a');
                link.href = `full_news.html?id=${news.id}`;
                link.textContent = news.title;
                listItem.appendChild(link);
                newsList.appendChild(listItem);
            });
        })
        .catch(error => {
            console.error('Помилка завантаження даних:', error);
        });
});

