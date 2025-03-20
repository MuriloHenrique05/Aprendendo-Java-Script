
// function init()
// {
//     let isValid = false
//     console.log("init menu", isValid)
// }

//init()

/* Função auto invocaveis */

(function(win, doc){
    "use strict"
    let isValid = false
    win.alert("Ola Mundo")
   console.log("menu", isValid)

   function init(){
    console.log("init do menu")
   }
   init()
})(window, document)
