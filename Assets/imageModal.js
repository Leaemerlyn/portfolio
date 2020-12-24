var modal = document.getElementById("modal");
var images = document.getElementsByClassName("image-modal");
var modalImage = document.getElementById("modalImage");
var back = document.getElementById("back");

for( var i = 0; i < images.length; i++ ){
    images[i].onclick = function(e){
        modal.style.display = "block";
        modalImage.src = this.src;
        document.body.classList.add("body-modal");
        back.style.display = "none";
    }
}

var span = document.getElementById("close");
span.onclick = function(e){
    modal.style.display = "none";
    document.body.classList.remove("body-modal");
    back.style.display = "block";
}