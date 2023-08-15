const button = document.getElementById('button');
const contents = document.getElementById('content');
const names = document.getElementById('authorName');

const quotes={ 
"Edith Wharton": "There are two ways of spreading light: to be the candle or the mirror that reflects it.",
"Camilla Eyring Kimball": "You do not find the happy life. You make it",
"Hafez": "Stay close to anything that makes you glad you are alive",
"John Wooden": "Make each day your masterpiece",
"Jim Rohn": "Happiness is not by chance, but by choice.",
"John Keats":"Impossible is for the unwilling ",
}
function generate(){

let authors = Object.keys(quotes);
console.log(authors);

let author= authors[Math.floor(Math.random()*authors.length)];
console.log(author);

let quote = quotes[author];
console.log(quote);

contents.innerHTML = quote;
names.innerHTML = author;


}
button.addEventListener('click',generate)
