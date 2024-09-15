var selectField = document.getElementsByClassName("select-field")[0]; 
var selectText = document.getElementsByClassName("selectText")[0]; 
var options = [...document.getElementsByClassName("options")]; 
var list = document.getElementsByClassName("list")[0];
var arrowIcon = document.getElementsByClassName("arrowIcon")[0];

selectField.onclick = function(){
    list.classList.toggle("hide")
    arrowIcon.classList.toggle("rotate")
}


for(option of options){
    option.onclick = function(){
        selectText.innerHTML = this.textContent;
        list.classList.toggle("hide")
        arrowIcon.classList.toggle("rotate")
    }
}