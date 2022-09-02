// for show/hide option on Hub Select Section
document.querySelector("#name").addEventListener("change", function(){ 
    document.querySelectorAll(".data").forEach(function(div){
        div.style.display = "none";
    })
    document.querySelector("#" + this.value).style.display = "block";
}); 
document.querySelector("#name").dispatchEvent(new Event("change"));