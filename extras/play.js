const person = {
    name: 'Paloma',
    age: 20,
    greet: ()  => {
        console.log('hello world!! '+ this.name);
    }
}

const printName = (personData) => {
    console.log(personData.name)
}

printName(person)


const printName2 = ({name}) => {
    console.log(name)
}

const {name, age} =  person
console.log(name, age)


/* person.greet(); */
const juegos = ['futbol', 'tenis']
let [juego1, juego2] =  juegos
console.log(juego1, juego2)


/* for(let juego of juegos ){
    console.log(juego)
} */
/* 
console.log(juegos.map(juego => {
    return 'Juego: ' + juego
} )),
console.log(juegos) */

/* juegos.push('Programming');
console.log(juegos)

copiedPerson = {...person}
console.log(copiedPerson)
const copiedArray =  juegos.slice(); //copiar el array
const copiedArray2 =  [...juegos]; //copiar el array
console.log(copiedArray)

const toArray = (arg1, arg2, arg3) => {
    return [arg1,arg2,arg3];
}

console.log(toArray(1,2,3)) */



