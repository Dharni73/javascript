const buttons = document.querySelectorAll('.btn');
const storeImg = document.querySelectorAll('.store-item');

buttons.forEach((button)=>{
   button.addEventListener('click',(e)=>{
    e.preventDefault();
   const filter = e.target.dataset.filter;
   console.log(filter);

   storeImg.forEach((Img=>{
    if(filter=='all'){
        Img.style.display ="block";
    }else{
        const ImgFilter = Img.dataset.item;
        if(filter == ImgFilter){
            Img.style.display="block";
        }
        else{
            Img.style.display="none";
        }
    }
   }))

   })

});





/*font-family: 'Lato', sans-serif;
font-family: 'Noto Serif', serif;
font-family: 'Roboto Slab', serif; */

