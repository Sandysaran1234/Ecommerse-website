var productcontainer=document.getElementById("product")
var search=document.getElementById("search")
var productlist=productcontainer.querySelectorAll("div")


search.addEventListener("keyup",function()
{
    var enteredvalue = event.target.value

    for(count=0;count<productlist.length;count=count+1)
    {
        var productname = productlist[count].querySelector("p").textContent

        if(productname.indexOf(enteredvalue)<0)
        {
            productlist[count].style.display="none"
        }
        else{
            productlist[count].style.display="block"
        }
    }
})

var sidebar=document.querySelector(".side-navbar")

function showbar()
{
    sidebar.style.display="block"
}
function closebar()
{
    sidebar.style.display="none"
}