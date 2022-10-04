var password = document.getElementById("password")
var confirm_password = document.getElementById("confirm");

function validatePassword(){
  if(password.value != confirm_password.value) {
    confirm_password.setCustomValidity("Passwords Don't Match");
  } else {
    confirm_password.setCustomValidity('');
  }
}

password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;

function elenacheck(){

    var birth= document.getElementById("birthday").value;
    var date= new Date();
    var b = new Date(birth);

    var x = b.getFullYear();
    var y = date.getFullYear();

    if( y-x<=10 ){
        document.getElementById("birthday").setCustomValidity("You are too young to join");
    }else{
      document.getElementById("birthday").setCustomValidity("");
    }

    var re = /^[A-Za-z]+$/;
    var country= document.getElementById("country").value;
    if(re.test(country)!=true){
      document.getElementById("country").setCustomValidity("No numbers in countries");
    }else{
      document.getElementById("country").setCustomValidity("");
    }
    

}
