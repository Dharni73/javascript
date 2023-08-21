const gallery = document.querySelectorAll(".gallery .image");
const previewBox =document.querySelector('.preview-box');
const closeIcon = document.querySelector('.close');
const previewImg = previewBox.querySelector('img');
const Prev =document.querySelector(".prev");
const next =document.querySelector(".next");


window.onload=() =>{
    for(let i=0; i<gallery.length; i++){
        let index =i;
       gallery[i].onclick =()=>{
        function preview(){
            // getting  user clicked image url
            let selectedImg = gallery[index].querySelector("img").src;
            console.log(selectedImg);
            previewImg.src = selectedImg // passing user clicked img url to preview source
        }
        
        //Previous button
       Prev.onclick=()=>{
       index--;
       preview();
       if(index<=0){ 
        index=gallery.length;
        preview();
        
      }
       }
       //Next button
         
       next.onclick=()=>{
        index++;
        preview();
        if(index==gallery.length){ 
         index=0;
         preview();
       }
        }

        preview();
        previewBox.classList.add("show");
        
        closeIcon.onclick=()=>{
            Prev.style.display="block";
            next.style.display="block";
            previewBox.classList.remove("show");
        }
        
    
    }
    }
}
