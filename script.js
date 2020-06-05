// Get the modal
var modal = document.getElementsByClassName("modal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementsByClassName("myImg");

for (let i = 0; i < modal.length; i++) {
    modal[i].innerHTML += `
        <span class="close">&times;</span>                
        <img class="modal-content" src="${img[i].src}">                          
        <div class="caption">${img[i].alt}</div>
      `
}

var modalImg = document.getElementsByClassName("modal-content");
var captionText = document.getElementsByClassName("caption");
var span = document.getElementsByClassName("close");

for (let i = 0; i < modal.length; i++) {

img[i].onclick = function(){
  modal[i].style.display = "block";
  modalImg[i].src = this.src;
  captionText[i].innerHTML = this.alt;
}

// Get the <span> element that closes the modal


// When the user clicks on <span> (x), close the modal
span[i].onclick = function() {
  modal[i].style.display = "none";
}

}