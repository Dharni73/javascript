const btn = document.getElementById('submit');
btn.addEventListener('click',()=>{
    const height = document.getElementById('Height').value;
    const weight = document.getElementById('Weight').value;
    const result = document.getElementById('output');
    let height_sts = false, weight_sts = false;
   
    if(height ==' '|| isNaN(height)|| (height<=0)){
        document.getElementById('Height_error').innerHTML="Invalid Height";
       
    }
    else{
        document.getElementById('Height_error').innerHTML=" ";
        height_sts = true;
    }
    if(weight ==' '|| isNaN(weight)|| (weight<=0)){
        document.getElementById('Weight_error').innerHTML="Invalid Weight";
       
    }
    else{
        document.getElementById('Weight_error').innerHTML=" ";
       
        weight_sts=true;
    }
    if(height_sts && weight_sts){
        const bmi =(weight / ((height*height)/10000)).toFixed(2);
        if(bmi < 18.6){
            result.innerHTML = 'UnderWeight : ' +bmi;
        }
        else if(bmi >= 18.6 && bmi <= 24.9){
            result.innerHTML ='Normal : ' +bmi;
        }
        else{
            result.innerHTML ='OverWeight : ' +bmi;
        }
    }
    else{
        alert('The form is error')
        result.innerHTML=''
    }

});
