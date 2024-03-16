var msg = document.querySelector('#error_message');
var forms = document.getElementById("bookform");

function isInteger(numb) {
    return /^\d+$/.test(numb);
}
function check_form() {
    var nam = document.forms["bookform"]["ddate"].value;
    var tim = document.forms["bookform"]["time"].value;
    var numb = document.forms["bookform"]["nnumber"].value;
    var floatvalue
    if (nam == "" || tim == null || numb == ""){
        msg.innerHTML='Data not completed; please re-enter';
        msg.setAttribute('style','color: red;');
    }  
    else if ( isInteger(numb)== false || numb<1) {
        msg.innerHTML='Please enter a valid number of people!';
        msg.setAttribute('style','color: red;');
    }
    else {
        msg.innerHTML='';
        var res = reserve(nam,tim,numb);
        if (res == true){
            alert("Your reservation is successful!");
        }
        else{
            alert("Sorry, the reservation is full!");
        }
        setTimeout(resetform(),1000);
    }
}

function resetform() {
    msg.innerHTML = "";
    document.forms["bookform"]['time'].value = null
    document.forms["bookform"]['ddate'].value = null
    document.forms["bookform"]['nnumber'].value = null
}

