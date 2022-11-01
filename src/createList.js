$(document).ready(function () {});

$(document).on("click", ".clothes", function () {
  $("#field1").after(
    '<ul><a href="#"><li>Clothes<button type="button" class="clothes">+</button></li></a><ul><a href="#"><li class="T_shirts">T-shirts<button type="button" class="tshirts">+</button></li></a></ul><ul><a href="#"><li class="Trousers">Trousers<button type="button" class="trousers">+</button></li></a></ul></ul>'
  );
});

$(document).on("click", ".tshirts", function () {
  $(this).after(
    '<li class="T_shirts">T-shirts<button type="button" class="tshirts">+</button></li>'
  );
});

$(document).on("click", ".trousers", function () {
  $(this).after(
    '<li class="Trousers">Trousers<button type="button" class="trousers">+</button></li>'
  );
});

$(document).on("click", ".electronics", function () {
  $("#field2").after(
    '<ul><a href="#"><li>Electronics<button type="button" class="electronics">+</button></li></a> <ul><a href="#"><li class="mobileAdd">Mobile<button type="button" class="mobile">+</button></li></a></ul><ul><a href="#"><li class="tabAdd">Tabs<button type="button" class="tabs">+</button></li></a></ul></ul>'
  );
});

$(document).on("click", ".mobile", function () {
  $(this).after(
    ' <li class="mobileAdd">Mobile<button type="button" class="mobile">+</button></li>'
  );
});

$(document).on("click", ".tabs", function () {
  $(this).after(
    '<li class="tabAdd">Tabs<button type="button" class="tabs">+</button></li>'
  );
});
