function validateTextbox() {
 
    var vessal1 = document.getElementById("name");  
    var vessal2 = document.getElementById("email");
    var vessal3 = document.getElementById("message");
    
    if (vessal1.value.length < 20 || vessal2.value.length < 20 || vessal3.value.length < 20) {
    alert("Please enter a subject, your email and a message with more than 20 characters!");

    return false;
    }
    
    }