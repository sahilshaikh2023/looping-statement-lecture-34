//  the queation is that having th ask  the user password and access the status 
let password = "mynameisSahil";

let pass = prompt("enter the password ");

if (pass == null) {
    console.error("Enter the password please ");
}
else{
     if (pass === "mynameisSahil") {
    console.log("Password Matched");
}
else {
    console.log(" password not matched");
}   
}