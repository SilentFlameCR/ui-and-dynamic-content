(function () {
    
    
    "use strict";
    
    //declaring variables
    var btn = document.getElementById("add-item");
    var uno = document.querySelector("ul");
    var list_item;
    
    //define function removeItem
    function removeItem(e) {
        e.preventDefault();
        
        list_item = e.target;
        
        uno.removeChild(list_item);
    }
    
    //event listener outside function
    btn.addEventListener("click", addItem);
    
    //define function addItem + add list item with class + event listeners
    function addItem(e) {
        e.preventDefault();
        
        list_item = document.createElement("li");
        
        list_item.innerHTML = prompt("What are you shopping for?");
        
        if (list_item.innerHTML.trim() != "") {
                uno.appendChild(list_item);
            list_item.setAttribute("class", "list" );
            
        list_item.addEventListener("click", removeItem);
            }
    }
    
    
    
    
}());