{

    type Alhpaneumeric = number | string

    const add = (param1: Alhpaneumeric, param2: Alhpaneumeric): Alhpaneumeric => {
        if (typeof param1 === "number" && typeof param2 === 'number') {
            return param1 + param2
        }
        else {
            return param1.toString() + param2.toString()
        }
    }





    type NormalUser = {
        name: string;
    }

    type AdminUser = {
        name: string;
        role: 'admin'
    }


    const getUser = (user: NormalUser | AdminUser) => {
        if ('role' in user) {
            console.log(`My name is ${user.name} and my role is ${user.role}`)
        }
        else {
            console.log(`My name is ${user.name}`)
        }
    }

    const normalUser: NormalUser = {
        name: 'Normal vai'
    }
    const adminUser: AdminUser = {
        name: "Admin vai",
        role: 'admin'
    }
    getUser(adminUser)








    class Animal {
        name: string;
        species: string

        constructor(name: string, species: string) {
            this.name = name;
            this.species = species;
        }

        makeSound() {
            console.log(`This ${this.name}`)
        }
    }

    class Dog extends Animal {
        constructor(name: string, species: string) {
            super(name, species)
        }
        makeSound() {
            console.log('Dog bark')
        }
        makeBark() {
            console.log('Dog is barking')
        }
    }


    const isDog = (animal: Animal): animal is Dog => {
        return animal instanceof Dog
    }


    const getAnimal = (animal: Animal) => {
        if (isDog(animal)) {
            animal.makeBark()
            // animal.
        }
    }


    const dog = new Dog('Mr.Dog', 'Bark')

}