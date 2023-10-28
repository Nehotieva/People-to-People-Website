document.addEventListener('DOMContentLoaded', function () {
    const queryParams = new URLSearchParams(window.location.search);
    const newsId = queryParams.get('id');
    const newsContainer = document.getElementById('full-news-container');

    // Завантаження даних з JSON-файлу для повних новин
    fetch('../full_news.json')
        .then(response => response.json())
        .then(fullNewsData => {
            // Знайдіть повну новину за ID
            const fullNews = fullNewsData.find(news => news.id === parseInt(newsId));
            if (fullNews) {
                // Розділити текст на абзаци і додати символи нового рядка
                const contentWithLineBreaks = fullNews.content.split('\n').join('<br>');

                // Відобразити повну новину з символами нового рядка
                newsContainer.innerHTML = `
                    <h2>${fullNews.title}</h2>
                    <p>${contentWithLineBreaks}</p>
                `;
            } else {
                // Повідомлення про відсутність новини
                newsContainer.innerHTML = '<p>Новина не знайдена.</p>';
            }
        })
        .catch(error => {
            console.error('Помилка завантаження даних:', error);
        });
});




