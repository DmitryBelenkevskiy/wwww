// Фотографии
var num=2;

var k=1;

var p=1;

var img=new Array();

for (i=1;i<=num;i++) {

img[i]=new Image();

img[i].src="image"+i+".jpeg";

}

function Next() {

if(k==num) {

k=0;

}

k=k+1;

p=k-2;

if(k==2) {

p=num;

}

if(k==1) {

p=num-1;

}

}

function Previous() {

if(p==1) {

p=num+1;

}

p=p-1;

k=p+2;

if(p==num-1) {

k=1;

}

if(p==num) {

k=2;

}

}

//Функция подъема 
$(function() {
 
    $(window).scroll(function() {
     
    if($(this).scrollTop() != 0) {
     
    $('#toTop').fadeIn();
     
    } else {
     
    $('#toTop').fadeOut();
     
    }
     
    });
     
    $('#toTop').click(function() {
     
    $('body,html').animate({scrollTop:0},150);
     
    });
     
    });