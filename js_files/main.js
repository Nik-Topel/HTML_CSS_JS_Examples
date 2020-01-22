var html_string= "html_files/html_examples.html";
var css_string= "html_files/css_examples.html";
var js_string= "html_files/js_examples.html";
var loaded_page = 1;
function set_iframe_to_html(){
    if(loaded_page != 1){
        document.getElementById('iframe_1').src = escape(html_string);
        loaded_page = 1;
    }
}
function set_iframe_to_css(){
    if(loaded_page != 2){
        document.getElementById('iframe_1').src = escape(css_string);
        loaded_page = 2;
    }
}
function set_iframe_to_js(){
    if(loaded_page != 3){
        document.getElementById('iframe_1').src = escape(js_string);
        loaded_page = 3;
    }
}