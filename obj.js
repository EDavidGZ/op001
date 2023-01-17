// - Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)

// - Una variable que obtenga tu edad a partir del objeto anterior

// - Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s

// - Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor

const me = {
    name: 'Efren',
    firstName: 'Garza',
    age: 20,
    height: 160,
    areYouDevoloper: true,
}
const bestFriend = {
    name: 'Carlos',
    firstName: 'Tlilayatzi',
    age: 23,
    height: 160,
    areYouDevoloper: false,
}
const bestFriendTwo = {
    name: 'Wero',
    firstName: 'Bello',
    age: 22,
    height: 168,
    areYouDevoloper: false,
}

let peoples = [me, bestFriend, bestFriendTwo]
peoples.sort((a, b) => b.age - a.age)

let age = me.age


console.log(peoples)