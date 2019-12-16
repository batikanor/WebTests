function revealMessage(){
    document.getElementById("hiddenMessage").style.display = 'block';
   

}
function countDown(){
    buttonya = document.getElementById("countDownButton");
    
    var currentVal = buttonya.innerHTML;
    var newVal = currentVal - 1;
    buttonya.innerHTML = newVal;
    if(newVal==0){
        document.getElementById("hiddenMessage").style.display = 'none';
        buttonya.innerHTML=10

    }
}
