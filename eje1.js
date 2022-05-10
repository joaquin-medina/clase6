//Crear clase:
class Heroe {

    constructor (position, name = 'Heroe'){
        
        this.position = position;
        this.name = name;
        this.life = '100';
        this.dmg = '5';
        this.exp = '0';   
    }
}

//Crear funcion
const heroeGenerator = (position, name) => {

    const heroe = new Heroe(position, name)

    return heroe;
    
}

//Dar valor a los objetos
const draven = heroeGenerator('0','Draven');
const varus = heroeGenerator('1', "Varus");
const jinx = heroeGenerator('2',);
const leona = heroeGenerator('3', "Leona");
const zed = heroeGenerator('4', "Zed");

const show = [draven, varus, jinx, leona, zed];

console.table(show);