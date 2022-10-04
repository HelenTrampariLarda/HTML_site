var x = document.querySelectorAll("h1");
x[0].style.backgroundColor = "#F3ADFF";

var y= document.getElementById("here")
y.style.border="5px solid #A3C9FC"

function myFunction() {
    document.getElementById("photo1").style.color = "red";  
}

function myFunction2() {
    document.getElementById("photo2").style.color = "green";
}

function myFunction3() {
    document.getElementById("photo3").style.color = "blue";
}

function imagefun() {
    var Image_Id = document.getElementById('getImage');
    if (Image_Id.src.match("photo1_.jpg")) {
        Image_Id.src = "photobomb_.jpg";
    }
    else {
        Image_Id.src = "photo1_.jpg";
    }
}     

let test = document.getElementById("hover");
test.addEventListener("mouseover", function( event ) {
    event.target.style.color = "pink";
  
    // reset the color
    setTimeout(function() {
      event.target.style.color = "";
    }, 500);
}, false);

var d = new Date();
var n = d.getDay();

if (n==1){

    var w = document.querySelectorAll("p");
    w[0].style.fontFamily = "sans-serif";
    w[2].style.fontFamily = "sans-serif";
    w[4].style.fontFamily = "sans-serif";

}else if(n==2){
    
    var w = document.querySelector("h1");
    w.style.backgroundColor="pink"

}else if(n==3){

    var w= document.getElementById("getImage")
    w.style.border="2px solid black"

    var w= document.getElementById("border")
    w.style.border="2px solid black"

    var w= document.getElementById("photo3")
    w.style.border="2px solid black"
    
}else if(n==4){

    var w = document.querySelectorAll("p");
    w[0].style.fontFamily = "ariel";
    w[2].style.fontFamily = "ariel";
    w[4].style.fontFamily = "ariel";

}else if(n==5){

    var w = document.querySelectorAll("h4");
    w[0].style.backgroundColor="yellow";
    w[1].style.backgroundColor="yellow";
    w[2].style.backgroundColor="yellow";

}else if(n==6){

    var str = document.getElementById("here").innerHTML; 

    var res = str.replace("My facebook", "Find my Facebook ->");
  
    document.getElementById("here").innerHTML = res;

}else{

    var str = document.getElementById("phone").innerHTML; 

    var res = str.replace("My phone number: +30 69XXXXXXX", "My phone number: not available on Sunday");
  
    document.getElementById("phone").innerHTML = res;

}
    