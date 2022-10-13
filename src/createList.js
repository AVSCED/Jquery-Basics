$(document).ready(function(){})

// function addCLothes(){
//   var a =`<ul> <li> Clothes <button class="addClothes" onclick="addCLothes()">+</button></li>
//   <ul><li><a>T-shirts</a> <button class="addTshirts" onclick="addTShirts()">+</button></li>
//   <li><a>Trousers</a> <button class="addTrousers" onclick="addTRousers()">+</button></li>
// </ul>` ;

// $("#added").after(a);
// }

// function addTShirts(){
// b=`<ul><li><a>T-shirts</a> <button class="addTshirts" onclick="addTShirts()">+</button></li></ul>`;
// $("#addTshirts").after(b);
// }

// function addTRousers(){
// c=`<ul><li><a>Trousers</a> <button class="addTrousers" onclick="addTRousers()">+</button></li><ul>`;
// $("addTrousers").after(c);
// }

// function addELectronics(){
// d=`<ul><li>Electronics<button class="addElectronics" onclick="addELectronics()">+</button></li><ul><li><a>Mobiles</a>
//   <button class="addMobiles" onclick="addMObiles()">+</button>
// </li><li><a>Tabs</a> <button class="addTabs" onclick="addTAbs()">+</button></li>
// </ul>
// </ul>`;
// $("#added").after(d);
// }

// function addMObiles(){
// e=`<ul> <li>
// <a>Mobiles</a>
// <button class="addMobiles" onclick="addMObiles()">+</button>
// </li></ul>`;
// $("addMobiles").after(e)
// }

// function addTAbs(){
// f=`<ul><li><a>Tabs</a> <button class="addTabs" onclick="addTAbs()">+</button></li></ul>`;
// $("addTabs").after(f);
// }

$(document).on("click",".clothes" ,function (){

    $("#field1").after('<ul><a href="#"><li>Clothes<button type="button" class="clothes">+</button></li></a><ul><a href="#"><li class="one1">T-shirts<button type="button" class="tshirts">+</button></li></a></ul><ul><a href="#"><li class="one2">Trousers<button type="button" class="trousers">+</button></li></a></ul></ul>');
});
$(document).on("click" ,".tshirts",function(){
    $(".one1").append('<li class="one1">T-shirts<button type="button" class="tshirts">+</button></li>');
});

$(document).on("click",".trousers",function(){
    $(".one2").append('<li class="one2">Trousers<button type="button" class="trousers">+</button></li>');
});
$(document).on("click",".electronics" ,function (){

    $("#field2").after('<ul><a href="#"><li>Electronics<button type="button" class="electronics">+</button></li></a> <ul><a href="#"><li class="mbs">Mobile<button type="button" class="mobile">+</button></li></a></ul><ul><a href="#"><li class="tbs">Tabs<button type="button" class="tabs">+</button></li></a></ul></ul>');
});
$(document).on("click" ,".mobile",function(){
    $(".mbs").append(' <li class="mbs">Mobile<button type="button" class="mobile">+</button></li>');
});

$(document).on("click",".tabs",function(){
    $(".tbs").append('<li class="tbs">Tabs<button type="button" class="tabs">+</button></li>');
});