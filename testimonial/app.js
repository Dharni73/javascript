const data= [
    {
        id:1,
        name:"Thomas",
        job:"Graphic Designer",
        img:"https://randomuser.me/api/portraits/men/11.jpg",
        text:"You know that tingly feeling you get on the back of your neck sometimes? I just got that feeling when talking with her. You know I don't believe in sixth senses, but there is something not right with her. I don't know how I know, but I just do."
    },
    {
        id:2,
        name:"Thel",
        job:" Designer",
        img:"https://randomuser.me/api/portraits/women/27.jpg",
        text:"She looked at her student wondering if she could ever get through. You need to learn to think for yourself, she wanted to tell him. Your friends are holding you back and bringing you down. But she didn't because she knew his friends were all that he had and even if that meant a life of misery, he would never give them up."
    },
    {
        id:3,
        name:"romas",
        job:"Artist",
        img:"https://randomuser.me/api/portraits/women/48.jpg",
        text:"She considered the birds to be her friends. She'd put out food for them each morning and then she'd watch as they came to the feeders to gorge themselves for the day. She wondered what they would do if something ever happened to her. Would they miss the meals she provided if she failed to put out the food one morning?",
    },
    {
        id:4,
        name:"Gale",
        job:"Graphic Designer",
        img:"https://randomuser.me/api/portraits/men/9.jpg",
        text:"Sleeping in his car was never the plan but sometimes things don't work out as planned. This had been his life for the last three months and he was just beginning to get used to it. He didn't actually enjoy it, but he had accepted it and come to terms with it. Or at least he thought he had. All that changed when he put the key into the ignition, turned it and the engine didn't make a sound."
    },

];

const img = document.querySelector("#pics");
const btnNext = document.querySelector("#btn-right");
const btnBack = document.querySelector("#btn-left");
const name = document.querySelector("#name");
const role=document.querySelector("#role");
const text = document.querySelector("#text");
let index =0;

window.addEventListener("DOMContentLoaded", function(){
    const testimonial =data[0];
    loadTestimonial(testimonial);

});
function loadTestimonial(data){
    img.src = data.img;
    name.textContent = data.name;
    role.textContent =data.job;
    text.innerHTML =`<i class="fa fa-quote-left"></i>${data.text}<i class="fa fa-quote-right"></i>`;
};
btnNext.addEventListener('click',function(){
    index++;
    if(index>data.length-1){
        index=0;
    }
    loadTestimonial(data[index]);
});
btnBack.addEventListener('click',()=>{
    index--;
    if(index<0){
        index= data.length-1;
    }
    loadTestimonial(data[index]);
});