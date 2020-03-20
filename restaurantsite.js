function validateItems() {
    clearErrors();
    var Name = document.forms["contactus"]["name"].value;
    var Email = document.forms["contactus"]["email"].value;
    var Phone = document.forms["contactus"]["phone"].value;
    if (Name == "") {
        document.forms["contactus"]["name"]
           .parentElement.className = "form-group has-error";
        document.forms["contactus"]["name"].focus();
        return false;
    }
   if (Email == "") {
       document.forms["contactus"]["email"]
          .parentElement.className = "form-group has-error"
       document.forms["contactus"]["email"].focus();
       return false;
   }
   if (Phone == "" || isNaN(phone)) {
       document.forms["contactus"]["phone"]
          .parentElement.className = "form-group has-error"
       document.forms["contactus"]["phone"].focus();
       return false;
   }
   else {
     alert("Thanks!");
   }

  
}
return false;
