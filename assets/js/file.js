class User{
    constructor(firstName, lastName, age, location){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.location = location;
    }

    nomeCompleto(){
        return `${this.firstName} ${this.lastName}`;
    }

    confronta(persona){
        return this.age > persona.age ? this.nomeCompleto() + " è più vecchio di " + persona.nomeCompleto() :
        persona.nomeCompleto() + " è più vecchio di " + this.nomeCompleto();
    }
}

let p1 = new User('Mauro', 'Rossi', 23, 'Roma');
let p2 = new User('Maria', 'Bianchi', 50, 'Milano');
console.log(p1.confronta(p2));

class Pet{
    constructor(petName, ownerName, species, breed){
        this.petName = petName;
        this.ownerName = ownerName;
        this.species = species;
        this.breed = breed;
    }

    sameOwner(pet){
        return this.ownerName == pet.ownerName;
    }
}

var pets = [];

window.onload = () => {
    let button = document.getElementById('btn');
    button.addEventListener('click', () => {
        let name = document.getElementById('name');
        let owner = document.getElementById('owner');
        let specie =  document.getElementById('specie');
        let razza = document.getElementById('razza');
        let pet = new Pet(name.value, owner.value, specie.value, razza.value);
        pets.push(pet);
        layoutList();
    });
};

function layoutList(){
    let lista = document.getElementById('lista');
    lista.innerHTML = '';
    pets.forEach(element => {
        let container = document.createElement('div');
        let nome = document.createElement('h2');
        nome.innerText = 'Nome: ' + element.petName;
        let owner = document.createElement('h3');
        owner.innerText = 'Padrone: ' + element.ownerName;
        let specie = document.createElement('h3');
        specie.innerText = 'Specie: ' + element.species;
        let razza = document.createElement('h3');
        razza.innerText = 'Razza: ' + element.breed;
        container.appendChild(nome);
        container.appendChild(owner);
        container.appendChild(specie);
        container.appendChild(razza);
        let item = document.createElement('li');
        item.appendChild(container);
        lista.appendChild(item);
    });
}