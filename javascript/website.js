 var Burger =
 {
 init: function()
 {
 var link = document.getElementsByClassName("topnav");
 for (var i = 0; i < link.length; i++)
 {
 link[i].addEventListener("click", clickListener);
 }
 function clickListener(event)
 {
 var li = event.currentTarget;
 li.classList.toggle("toggleclass");
 }
 }
 }; 
 Burger.init();

 function googleTranslateElementInit() {
    new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
  }