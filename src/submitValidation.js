$(document).ready(function(){})
function validate(){
    
    var firstName =$("#fName").val();

    var lastName =$("#lName").val();

    $("#fName").css("background-color","white");
    $("#lName").css("background-color","white");

console.log(firstName);
console.log(lastName);

if(firstName=="" )
{
    alert("Name field empty !");
    $("#fName").focus();
    $("#fName").css("background-color","red");
}

if(lastName=="")
{
    alert("Last name field empty !");
    $("#lName").focus();
    $("#lName").css("background-color","red");
}
}
// $("#fName").on("blur", function() {
//     if ( $(this).val().match('^[a-zA-Z]{3,16}$') ) {
//         alert( "Valid name" );
//     } else {
//         alert("That's not a name");
//     }
// $("#lName").on("blur", function() {
//     if ( $(this).val().match('^[a-zA-Z]{3,16}$') ) {
//         alert( "Valid name" );
//     } else {
//         alert("That's not a name");
//     }
// });
// });

