const input = document.getElementById('password');
const button = document.getElementById('submit');
const length = 8;
const UpperCase ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LowerCase ="abcdefghijklmnopqrstuvwxyz";
const numbers ="0123456789";
const symbol ="!@#$%^*&?<>|";
const allChars = UpperCase + LowerCase + numbers + symbol;

button.addEventListener('click',randomPassword)
function randomPassword(){
    let Password ="";
    Password = Password + UpperCase[Math.floor(Math.random()*UpperCase.length)];
    Password = Password + LowerCase[Math.floor(Math.random()*LowerCase.length)];
    Password = Password + numbers[Math.floor(Math.random()*numbers.length)];
    Password = Password + symbol[Math.floor(Math.random()*symbol.length)];

   while(Password.length<length){
    Password = Password + allChars[Math.floor(Math.random()*allChars.length)]
   }
 
   input.value= Password;
}
function copyPassword(){
    input.select();
    document.execCommand("copy");
}

