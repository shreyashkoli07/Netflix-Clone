function onSubmit(){
    var Email=document.forms["Sign-form"]["email"].value;
    var Password=document.forms["Sign-form"]["password"].value;
    

    //Validation

    if (Email.length == 0) {
        document.getElementById("p2").innerHTML = "Please enter valid email or phone number";
        document.getElementById("p2").style.color = "red";
        document.getElementById("p2").style.fontSize="12px";
        return false;
    }

    if (Password.length == 0 ) {
        document.getElementById("p3").innerHTML += "Your password must contain between 4 and 60 characters. ";
        document.getElementById("p3").style.color = "red";
        document.getElementById("p3").style.fontSize="12px";
       
        return false;
    }
    document.getElementById("p2").style.visibility = false;
    document.getElementById("p3").style.visibility = false;



    

        alert("Application Submitted Successfully");
        location.assign("welcome.html");
        return false;
   

}
function onClick() {

    document.getElementById('p1').innerHTML += 'The information collected by Google reCAPTCHA is subject to the Google <a href="https://policies.google.com/privacy" target="_blank">Privacy Policy</a> and <a href="https://policies.google.com/terms">Terms of Service</a>, and is used for providing, maintaining, and improving the reCAPTCHA service and for general security purposes (it is not used for personalised advertising by Google).'

    document.getElementById('btn').style.display='none'
    return false;
     

}

function loadGoogleTranslate(){
    new google.translate.TranslateElement("google_element");
}