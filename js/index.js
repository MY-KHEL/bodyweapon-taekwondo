var mybutton = document.getElementById("myBtn");
var nav =document.getElementById('navbar');

// When the user scrolls down 20px from the top of the document, show the button
// window.onscroll = function(){
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
   
//     mybutton.style.display = "block";
   
//   } else {
    
//     mybutton.style.display = "none";
   
//   }
// }
// // When the user clicks on the button, scroll to the top of the document

window.onscroll = function(){
    if(window.scrollY>0){
        mybutton.style.display = 'block';
    }
    else{
        mybutton.style.display = 'none'
    }
}
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

window.onscroll = function(){
    if(window.scrollY>0){
        nav.classList.add('bgcolor2');
    }else{
        nav.classList.remove('bgcolor2');
    }
}
