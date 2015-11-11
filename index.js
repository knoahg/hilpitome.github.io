$(function(){
    $(".elemnt").typed({
        strings: ["Hi", "I am Hilary Egesa!", "I am skilled in:","Ruby on Rails.", "android.", "javascript.", " and UX design"],
        typeSpeed: 0.5
    });
});
window.onload=timeout;
function timeout(){
window.setTimeout("redirect()",15000)}

function redirect(){
window.location="home.html"
return}
