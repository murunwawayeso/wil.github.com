function clearScreen(){
    document.getElementById('input_bo').value="";
}
//function to display values
function display(value){
    document.getElementById("input_bo").value+=value;
}
 function calculate(){
    var initial=document.getElementById('input_bo').value;
    var total=eval(initial);
    document.getElementById('input_bo').value=total;
 }