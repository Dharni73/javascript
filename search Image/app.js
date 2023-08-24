const searchBox = document.querySelector(".search-tab");
const galleryBox = document.querySelectorAll(".gallery-item");
console.log(galleryBox);
console.log(searchBox);

searchBox.addEventListener("keyup",()=>{
const searchItem = searchBox.value;
   console.log(searchItem);

   galleryBox.forEach((img)=>{
    const imgFilter = img.dataset.filter;
    if(imgFilter.includes(searchItem)){
        img.style.display ="block";
    }
    else{
        img.style.display ="none";
    }

   })
})
