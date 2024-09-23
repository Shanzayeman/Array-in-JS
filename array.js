let sis=["shanzay" , "Alham" , "Hani" ,"Farwa" ,"Shakra" , "Anza" , "Maliha" , "Sani" ,"Andleeb", 9];
sis[7]="Saneeza";
document.getElementById('m1').innerHTML=("I have " + sis.length + " sisters.");
document.getElementById('m2').innerHTML=("I am at number "+ (sis.length)+ " .");
document.getElementById('m3').innerHTML=("I love number "+ (sis.length-7)+ " sister . And her name is " + sis[7] + ".");
document.getElementById('m4').innerHTML=("My name is " + sis[0] +" .");
document.getElementById('m5').innerHTML=("she is so funny" +sis[sis.length-4] +".");
let list="<ul>";
sis.forEach(myLove);
list +="</ul>";
function myLove(hello){
    list +=  "<li>" + hello + "</li>"
}
document.getElementById('m7').innerHTML=(list);