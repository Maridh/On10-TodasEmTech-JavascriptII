// const countryList = [ "Argentina","Armenia","Australia","Azerbaijan","Bahamas","Brazil","Burkina Faso", "Costa Rica","Mauritania","St Vincent","Uganda","United Arab Emirates","Uruguay","Uzbekistan","Venezuela"];

// countryList.splice(1, 2, "japão", "grécia");
// console.log(countryList);

const usuarios = [
    {user:234, name: 'Marcia', idade:40 },
    {user:235, name: 'Lorena', idade:20 },
    {user:236, name: 'Patricia', idade:24 },
    {user:237, name: 'Mariana', idade:15 },
    {user:238, name: 'Isis', idade:34 },
    {user:239, name: 'Pietra', idade:23 }
]

// usuarios.splice(2,3);
// console.log(usuarios);

// usuarios.splice(2,3, "user: 244, name: paula, idade: 35");
// console.log(usuarios);

usuarios.splice(0, 1, {
    user: 244, 
    name: 'paula',
    idade: 35,
    })

console.log(usuarios);