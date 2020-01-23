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
