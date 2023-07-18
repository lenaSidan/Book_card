const cardElement = document.getElementById("book-card");

async function loadBook() {
    const response = await fetch ("https://lenasidan.github.io/1984_George-Orwell/1984_George-Orwell.json");
    const obj = await response.json();
    console.log(obj);
    const { title, author, genre, publicationYear, rating, synopsis, mainCharacters, language } = obj;
    console.log(title, author, genre, publicationYear, rating, synopsis, mainCharacters, language);
    console.log(title, author, genre, publicationYear, rating, synopsis, mainCharacters, language);
    console.log(title, author, genre, publicationYear, rating, synopsis, mainCharacters, language);
    console.log(title, author, genre, publicationYear, rating, synopsis, mainCharacters, language);
    cardElement.innerHTML = `Название: ${title}<br>Автор: ${author}<br>Жанр: ${genre}<br>Год издания: ${publicationYear}<br>Рейтинг: ${rating}<br>Описание: ${synopsis}<br>Основные персонажи: ${mainCharacters}<br>Язык: ${language}`;

}
loadBook();