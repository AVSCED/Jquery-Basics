$(document).ready(function(){})

function addCLothes(){
  var a =`<ul> <li> Clothes <button id="addClothes" onclick="addCLothes()">+</button></li>
  <ul><li><a>T-shirts</a> <button id="addTshirts" onclick="addTShirts()">+</button></li>
  <li><a>Trousers</a> <button id="addTrousers" onclick="addTRousers()">+</button></li>
</ul>` ;

$("#added").after(a);
}

function addTShirts(){
b=`<ul><li><a>T-shirts</a> <button id="addTshirts" onclick="addTShirts()">+</button></li></ul>`;
$("#addTshirts").after(b);
}

function addTRousers(){
c=`<ul><li><a>Trousers</a> <button id="addTrousers" onclick="addTRousers()">+</button></li><ul>`;
$("addTrousers").after(c);
}

function addELectronics(){
d=`<ul><li>Electronics<button id="addElectronics" onclick="addELectronics()">+</button></li><ul><li><a>Mobiles</a>
  <button id="addMobiles" onclick="addMObiles()">+</button>
</li><li><a>Tabs</a> <button id="addTabs" onclick="addTAbs()">+</button></li>
</ul>
</ul>`;
$("#added").after(d);
}

function addMObiles(){
e=`<ul> <li>
<a>Mobiles</a>
<button id="addMobiles" onclick="addMObiles()">+</button>
</li></ul>`;
$("addMobiles").after(e)
}

function addTAbs(){
f=`<ul><li><a>Tabs</a> <button id="addTabs" onclick="addTAbs()">+</button></li></ul>`;
$("addTabs").after(f);
}