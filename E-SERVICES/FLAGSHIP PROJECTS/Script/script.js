   
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