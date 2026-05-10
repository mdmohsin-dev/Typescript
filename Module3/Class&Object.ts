{

    class Animal {
        name: string;
        species: string
        sound: string;

        constructor(name: string, species: string, sound: string) {
            this.name = name;
            this.species = species;
            this.sound = sound
        }

        makeSound(){
            console.log(`This ${this.name} is says ${this.sound}`)
        }
    }


    // Instance
    const Dog = new Animal('German Sheperd', 'Dog', 'Ghew ghew')
    const Cat = new Animal('The Guardian','Cat','Mew mew')
    console.log(Dog)
    console.log(Cat)
    Dog.makeSound()

}