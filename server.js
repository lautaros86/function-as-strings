function customBetween(a, b, c) {
    return c > a && c < b
}

var funcionString = customBetween.toString()

console.log(funcionString)

// funcion como string
// console.log(funcionString)


// creo un funcion desde un string
var funcionObjeto = new Function('a', 'b', 'c', 'return ' + funcionString)
console.log(funcionObjeto.toString())

// ejecuto la funcion
console.log(funcionObjeto()(5, 10, 1))