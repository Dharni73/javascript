
/* https://randomuser.me/api/portraits/women/54.jpg
https://randomuser.me/api/portraits/women/73.jpg
https://randomuser.me/api/portraits/women/84.jpg
https://randomuser.me/api/portraits/women/23.jpg */

const Name = document.querySelector(".name");
const Role = document.querySelector(".role");
const Text = document.querySelector(".text");
const Img = document.querySelector("img");
const bntLeft = document.querySelector("#btn-left");
const bntRight = document.querySelector("#btn-right");
let index =0;

const data =[
    {
        id:1,
        name:"Rudra",
        work:"Singer",
        image:"https://randomuser.me/api/portraits/women/54.jpg",
        text:"Hello, I am Rudra From India , I am here for Study the different culture. I have Completed My Musical Degree in XYZ College Mumbai in India"
    },
    {
        id:2,
        name:"Anush",
        work:"Dancer",
        image:"https://randomuser.me/api/portraits/women/73.jpg",
        text:"Hello, I am Anush From India , I am here for Job. I am a Dance teacher I have Completed My Degree in XYZ College Chennai in India"
    },
    {
        id:3,
        name:"Galye",
        work:"Engineer",
        image:"https://randomuser.me/api/portraits/women/84.jpg",
        text:"Hello, I am Galye From Italy , I am here for my Masters . I am good in Studies so i am here.And I hope to good at every where"
    },
    {
        id:4,
        name:"May",
        work:"Designer",
        image:"https://randomuser.me/api/portraits/women/23.jpg",
        text:"Hello, I am May From German, I am a doctor.I Love to Study and Explore Different Country , so i am visiting here as a traveller"
    },

]
window.addEventListener('DOMContentLoaded',()=>{
    const info =data[0];
    addInfo(info);

})

function addInfo(data){
    Img.src=data.image;
    Name.innerHTML=data.name;
    Role.innerHTML = data.work;
    Text.innerHTML = data.text;
}

bntLeft.addEventListener('click',()=>{
    index--;
    if(index<0){
        index = data.length-1;
    }
    addInfo(data[index]);
    
})


bntRight.addEventListener('click',()=>{
    index++;
    if(index==data.length){
        index = 0
    }
    addInfo(data[index]);
})