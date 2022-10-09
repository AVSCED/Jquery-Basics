$(document).ready(function () {
  $("table").css({ border: "solid" }, { width: "500px" });
  $("table").css({ width: "500px" });
  $("tr:even").css({ background: "lightgrey" });

  $("#bag").change(function () {
    var bg = $(this).val();

    $("#bagPrice").html("Rs." + bg);
  });

  $("#size").change(function () {
    var siz = $(this).val();

    $("#shirtPrice").html("Rs." + siz);
  });

  $("#jeans").change(function () {
    var jeanSize = $(this).val();

    $("#jeanPrice").html("Rs." + jeanSize);
  });

  $("#trouser").change(function () {
    var trouserSize = $(this).val();

    $("#trouserPrice").html("Rs." + trouserSize);
  });
});
