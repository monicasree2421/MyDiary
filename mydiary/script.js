var popup=document.querySelector(".popup")
var popupbox=document.querySelector(".popupbox")
var addpopupbutton=document.getElementById("add-popup-button")

addpopupbutton.addEventListener("click",function(){
    popup.style.display="block"
    popupbox.style.display="block"
})

var cancel=document.getElementById("cancel")

cancel.addEventListener("click",function(event){
    event.preventDefault()
    popup.style.display="none"
    popupbox.style.display="none"
})

var container=document.querySelector(".container")
var add=document.getElementById("add")
var title=document.getElementById("title")
var date=document.getElementById("date")
var description=document.getElementById("description")

add.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","diary-container")
    div.innerHTML=`<h2>${title.value}</h2>
    <h5>${date.value}</h5>
    <p>${description.value}</p>
    <button>DELETE</button>`
    container.append(div)
    popup.style.display="none"
    popupbox.style.display="none"
})

function del(event)
{
    event.target.parentElement.remove()
}

