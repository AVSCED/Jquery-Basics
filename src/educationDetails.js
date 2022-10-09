$(document).ready(function(){})
function addRow(){
let a= `<input type="text" id="eClass" placeholder="Enter Your Class" />
<input type="text" id="board" placeholder="Enter Board of Education">
<input type="text" id="marks" placeholder="Enter Your Marks" />
<input type="text" id="division" placeholder="Enter divison achieved"/>`;

    $("#details").after('<div id="rem">'+a+'</div>');
}
function del(){
        $("#rem").remove();
}