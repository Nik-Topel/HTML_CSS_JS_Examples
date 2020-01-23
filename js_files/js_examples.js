function start(){
    update_timer();
}
function change_text(){
    document.getElementById("texttochange").textContent  = "Good job";
}
function change_image(){
    document.getElementById("tick").src = "../image_files/tick.png"
}
function random_text(){
    document.getElementById("random_number").textContent = Math.round(Math.random()*100);
}
function add_to_number(){
    document.getElementById("add_to_number").textContent = parseInt(document.getElementById("add_to_number").textContent,10) +1;
}
function change_color(){
    document.getElementById("change_color").style.color = "#"+rgbToHex(Math.round(Math.random()*100))+rgbToHex(Math.round(Math.random()*255))+rgbToHex(Math.round(Math.random()*255));
}
var rgbToHex = function (rgb) { 
    var hex = Number(rgb).toString(16);
    if (hex.length < 2) {
         hex = "0" + hex;
    }
    return hex;
  };
var ms = 0;
var s= 0;
var m= 0;
var h = 0;
var d = 0;
var w = 0;
function pad2(number) {
    return (number < 10 ? '0' : '') + number;
}
function update_timer()
{
    setTimeout(function(){
    ms += 1;
    if(ms == 100){
        s += 1;
        ms = 0;
    }
    if(s == 60){
        m += 1;
        s = 60;
    }
    if(m == 60){
        h += 1;
        m = 0
    }
    if(h == 24){
        d += 1;
        h = 0
    }
    if(d == 7){
        w += 1;
        d = 0
    }
    document.getElementById("timer").textContent = pad2(w) +":"+ pad2(d) +":"+ pad2(h) +":"+ pad2(m) +":"+ pad2(s) +":"+ pad2(ms); 
    update_timer(); 
    },10)
}