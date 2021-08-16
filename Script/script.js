function updatetime()
{
    const d = new Date();
document.getElementsByClassName("time")[0].innerHTML = d;
}
setInterval(updatetime,1000);
   
function openNav()
{
    var m = document.getElementsByClassName("menu-bar-small-device");
    var l =m[0];
    if(l.style.display==="flex"){
        l.style.display="none";
    }
    else 
    {
        l.style.display="flex";
    }
}
function shownestedlinkresource()
{
    var nested= document.getElementsByClassName("unordered-nested-resource");
    var nested_first =nested[0];
    if(nested_first.style.display==="flex"){
        nested_first.style.display="none";
    }
    else 
    {
    nested_first.style.display="flex";
    }
}


   
function shownestedlinkcontact()
{
    var nested= document.getElementsByClassName("unordered-nested-contact");
    var nested_first =nested[0];
    if(nested_first.style.display==="flex"){
        nested_first.style.display="none";
    }
    else 
    {
    nested_first.style.display="flex";
    }
}

function shownestedlinkimp()
{
    var nested= document.getElementsByClassName("unordered-nested-imp");
    var nested_first =nested[0];
    if(nested_first.style.display==="flex"){
        nested_first.style.display="none";
    }
    else 
    {
    nested_first.style.display="flex";
    }
}

function changeintominus()
{
  var  resource =document.getElementsByClassName("resource");
  resource[0].innerHTML="RESOURCE&nbsp;-";
}


function changeintoplus()
{
  var  resource =document.getElementsByClassName("resource");
  resource[0].innerHTML="RESOURCE&nbsp;+";
}

function contactchangeintominus()
{
  var  contact =document.getElementsByClassName("contact");
  contact[0].innerHTML="CONTACT&nbsp;-";
}


function contactchangeintoplus()
{
  var  contact =document.getElementsByClassName("contact");
 contact[0].innerHTML="CONTACT&nbsp;+";
}






var slideIndex = 1;

showSlides(slideIndex);


function plusSlides(n) {
  showSlides(slideIndex += n);
  clearInterval(m);
}
function currentslide(n)
{
    showSlides(slideIndex =n);
    clearInterval(m);
}



function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("photo-info-container");
  var sliders= document.getElementsByClassName('slider');

  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for(i = 0;i<sliders.length;i++)
  {
    sliders[i].style.width ="2em";
    sliders[i].style.height="10px";
    sliders[i].style.borderRadius ="10px";
    sliders[i].style.boxShadow="0px 0px 3px var(--fifth-shade)";
      
  }


  slides[slideIndex-1].style.display = "flex";
  sliders[slideIndex-1].style.width ="10px";
  sliders[slideIndex-1].style.borderRadius ="50%";
  sliders[slideIndex-1].style.boxShadow="0px 0px 3px var(--fifth-shade) inset"

}

window.onresize=checkwidth;
window.onload=checkwidth;

function checkwidth()
{

if(window.screen.width<426)

{
var slideIndextemp = 1;

newSlides(slideIndextemp);


function newSlides(n) {
  var i;
  var slides = document.getElementsByClassName("photo-info-container");
  var sliders= document.getElementsByClassName('slider');

  if (n > slides.length) {slideIndextemp = 1}
  if (n < 1) {slideIndextemp = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for(i = 0;i<sliders.length;i++)
  {
    sliders[i].style.width ="2em";
    sliders[i].style.height="10px";
    sliders[i].style.borderRadius ="10px";
    sliders[i].style.boxShadow="0px 0px 3px var(--fifth-shade)";
      
  }


  slides[slideIndextemp-1].style.display = "flex";
  sliders[slideIndextemp-1].style.width ="10px";
  sliders[slideIndextemp-1].style.borderRadius ="50%";
  sliders[slideIndextemp-1].style.boxShadow="0px 0px 3px var(--fifth-shade) inset"

}

}

else{
  var slidestemp = document.getElementsByClassName("photo-info-container");
  for (i = 0; i < slidestemp.length; i++) {
    slidestemp[i].style.display = "flex";
}
}

}






//automatic
if(window.screen.width<426)
{
var slideIndex = 0;
showSlider();

function showSlider() {
  var i;
  var displayslide = document.getElementsByClassName("photo-info-container");
  var dots = document.getElementsByClassName("slider");
  for (i = 0; i < displayslide.length; i++) {
    displayslide[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].style.width ="2em";
    dots[i].style.height="10px";
    dots[i].style.borderRadius ="10px";
    dots[i].style.boxShadow="0px 0px 3px var(--fifth-shade)";
    
  }

  slideIndex++;
  if (slideIndex > displayslide.length) {slideIndex = 1}
  if(slideIndex<=0)
  {
      slideIndex=displayslide.length;
  }
  displayslide[slideIndex-1].style.display = "flex";

 
  dots[slideIndex-1].style.width ="10px";
  dots[slideIndex-1].style.borderRadius ="50%";
  dots[slideIndex-1].style.boxShadow="0px 0px 3px var(--fifth-shade) inset"

 // Change image every 2 seconds
}

var m = setInterval(showSlider, 3000);
}













//change-card-value

function changethis(n)
{
  var loc = document.getElementsByClassName("location");
  var add = document.getElementsByClassName("full-address");
  var bot = document.getElementsByClassName("bottom-heading");
  var top = document.getElementsByClassName("top-heading");
  top[n-1].style.visibility="hidden";
  loc[n-1].style.display="none";
  add[n-1].style.display="flex";
  bot[n-1].style.backgroundColor="var(--zero-shade)";
  bot[n-1].style.color="var(--third-shade)";
  bot[n-1].style.borderColor="var(--third-shade)";
}


function normalthis(n)
{
  var loc = document.getElementsByClassName("location");
  var add = document.getElementsByClassName("full-address");
  var bot = document.getElementsByClassName("bottom-heading");
  var top = document.getElementsByClassName("top-heading");
  top[n-1].style.visibility="visible";
  loc[n-1].style.display="flex";
  add[n-1].style.display="none";

  bot[n-1].style.backgroundColor="var(--third-shade)";
  bot[n-1].style.color="var(--zero-shade)";
  bot[n-1].style.borderColor="var(--zero-shade)";
}




function changeplaybutton()
{
  var play = document.getElementById("playbtn");
  var pause  =document.getElementById("pauseBtn");
  var move = document.getElementById("moving-tag");
 
  play.style.display="none";
 pause.style.display="flex";
 move.start();
 

}


function changepausebutton()
{
  var play = document.getElementById("playbtn");
  var pause  =document.getElementById("pauseBtn");
 var move = document.getElementById("moving-tag");
  play.style.display="flex";
 pause.style.display="none";
 move.stop();
 


}
