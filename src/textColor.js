$(document).ready(function () {
  var c = $(".test :first-child").val();
  // $(".test").animate( (
  //   $(".test :first-child").css({ color: "red" }),
  //   $(".test :last-child").css({ color: "red" })) , 500
  // );
//   $(".test :first-child").css({ color: "red" });
//   $(".test :last-child").css({ color: "red" });
setTimeout(function(){
  $(".test :first-child").css({ color: "red" }),
  $(".test :last-child").css({ color: "red" })
},5000);
setTimeout(function(){
  $(".test :first-child").css({ display: "none" }),
  $(".test :last-child").css({ display: "none" })
},10000);
});
