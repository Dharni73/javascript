function image(){
   
}
const buttons = document.querySelectorAll(".btn");
const imgDiv = document.querySelector(".img-container");
const picture =[
    "Agra-Fort",
    "Gate2",
    "Golden-Temple",
    "mysore-palace",
    "qutab",
]
let index =0;
buttons.forEach((button) => {
    button.addEventListener('click',()=>{
        
        if(button.classList.contains('btn-left')){
           index--;
           if(index<0){
            index = picture.length-1;
           }
           imgDiv.style.background = `url("img/${picture[index]}.jpg") center/cover fixed no-repeat`;
        }
        else{
            index++;
            if(index===picture.length){
             index = 0;
            }
            imgDiv.style.background = `url("img/${picture[index]}.jpg") center/cover fixed no-repeat`;
        }
    })
    
});