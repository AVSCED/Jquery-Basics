$(document).ready(function(){

    
    $("#conifrmPassword").keyup(function(){

        var confirmedPassword = $(this).val();

        if ( $("#enterPassword").val() != confirmedPassword)

        {
            $("#warning").html("Password Doesn't Match").css("color","red");
        }

        else
        
        {
            $("#warning").html("Password Matches").css("color","green");
        }
    })
})