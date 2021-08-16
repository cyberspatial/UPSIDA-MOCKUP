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
