var text_was_changed = false;
var img_was_changed = false;
function change_text(){
    if(text_was_changed ==false){
        document.getElementById("texttochange").textContent  = "Good job";
        text_was_changed = true;
    }
}
function change_image(){
    if(img_was_changed ==false){
    document.getElementsByClassName('image_1').scr = "../image_files/tick."png";
    img_was_changed = true;
    }
}