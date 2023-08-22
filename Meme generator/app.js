const button = document.querySelector(".meme-generator .generate-meme-btn");
const memeImg = document.querySelector("img");
const Title = document.querySelector(".meme-title");
const Author = document.querySelector(".meme-author");


const generateMeme=()=>{
    fetch("https://meme-api.com/gimme/wholesomememes")
    .then((res)=>res.json())
    .then((data) =>{
        updateDetails(data.url ,data.title, data.author)

    });
}
const updateDetails =(url, title, author)=>{
    memeImg.src = url;
    Title.innerHTML = title;
    Author.innerHTML = ` Meme by: ${author}`;

};
button.addEventListener('click',generateMeme);
generateMeme();