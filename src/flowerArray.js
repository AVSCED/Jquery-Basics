var flowerArray = [
  "Lily",
  "Lotus",
  "Lavender",
  "Rose",
  "Jasmine",
  "Aster",
  "Iris",
  "Marigold",
];
$(document).ready(function () {
  $("#myInput").keyup(function () {
    var inp = $(this).val().toLowerCase();
    a = flowerArray.filter(function (e) {
      console.log(inp); console.log([...e]);
      return inp == e.toString().toLowerCase();
    }
    );
    $("#suggest").html(a);
  });
});
// $(document).ready(function(){
//   $("#myInput").on("keyup", function() {
//     var value = $(this).val().toLowerCase();
//     $("#myList li").filter(function() {
//       $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
//     });
//   });
// });
