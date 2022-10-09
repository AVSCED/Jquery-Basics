images=["./cars/1.jpeg" , "./cars/2.jpeg" ,"./cars/3.jpeg", "./cars/4.jpeg" ,"./cars/5.jpeg"];
$(document).ready(function(){})
       const k=0;
       const l=4;
       var c=0;
    
     $("#previousImage").click(function(){
        if(c==0){
            c=4;
        }
        $("#displayImage").html('<img src="'+images[c--]+'"/>');

     });
     $("#nextImage").click(function(){
        if(c==5)
        {
            c=0;
        }
        $("#displayImage").html('<img src="'+images[c++]+'"/>');
 

     })


