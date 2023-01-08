let img=document.getElementsByTagName('img');
let but=document.getElementsByClassName('butt')[0];
let pro=document.getElementsByClassName('project_model')[0];
let cross=document.getElementsByClassName('fa-xmark')[0];
let img1=img[0];
let img2=img[1];

var lastScrollTop;
navbar = document.getElementById('navbar');
window.addEventListener('scroll',function(){
var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
if(scrollTop > lastScrollTop){
navbar.style.top='-80px';
}
else{
navbar.style.top='0';
}
lastScrollTop = scrollTop;
});
but.addEventListener('click',click2);
console.log(but);
function click2(){
    // pro.style.display="flex";
    pro.style.transform="scale(1)";

}
cross.addEventListener('click',click3);
console.log(cross);
function click3(){
    // pro.style.display="none";
    pro.style.transform="scale(0)";
}

