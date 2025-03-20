const call = function (cb){
    console.log("funcao teste")
    console.log(cb)
    if (typeof cb === 'function'){
        cb(30)
    } 
}

const f1 = function(param){
    console.log("funcao anonima de callback")
    console.log(param)
}

//f1(30)
call(f1)