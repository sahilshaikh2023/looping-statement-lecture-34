// this time now the using the while condition for allow only 
// 3 attempt to enter the correct password , if user get it right early stop 
// if not , account is locked 

let attempt = 0 ;
let khulgaya  =  false  ;
let pass =  "Sahilbhai";

let password = prompt("password batao.... ");
attempt++;

if( password === pass ){
    khulgaya= true;


}

while (password !== pass ){
    if (attempt === 3){
        console.error ("Account Locked ");
        break;
    }
    password =prompt ("password batao");
    if (password === pass )
        khulgaya = true;
    attempt++;



}
if (khulgaya===true){
    console.log("Acccount is opened");
}