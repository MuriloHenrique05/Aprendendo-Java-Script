   "use strict";
  /*Usando modo use-strict - o use strict precisa ser a primeira linha
  do codigo JavaScript, antes dos comentarios, deixa o js mais seguro*/
  //u = 10
 
  function foo(){
    "use strict"
    let x = 20

  }
  foo()
  //console.log(u)

  // function dobrar(n1, n1){
  //   "use strict"
  //   console.log(n1, n1)
  //   return n1 * n1
  // }

  //console.log(dobrar(5))

  // function Teste(){
  //   "use strict"
  //   console.log(this)
  //   this.a = "a"
  // }

  // Teste()

  let msg = "uma string"

  msg.count = 0

  console.log(msg)