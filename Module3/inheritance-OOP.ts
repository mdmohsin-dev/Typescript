{

    class Person {
        name: string;
        age: number;
        address: string

        constructor(name: string, age: number, address: string) {
            this.name = name, this.age = age, this.address = address
        }

        getSleep(hours: number) {
            console.log(`${this.name} is sleeping for ${hours} hours`)
        }
    }




    class Student extends Person {
        constructor(name: string, age: number, address: string) {
            super(name, age, address)
        }
    }

    // Instance
    const student1 = new Student('Mr x', 18, 'Kishoreganj')
    console.log(student1)
    student1.getSleep(4)



    class Teacher extends Person {
        designation: string;
        constructor(name: string, age: number, address: string, designation: string) {
            super(name, age, address)
            this.designation = designation
        }
        

        takeClass(numOfClass: number) {
            console.log(`${this.name} will take ${numOfClass}`)
        }
    }

    const teacher1 = new Teacher('Mr teacher', 18, 'Dhaka', 'Professors')
    teacher1.getSleep(5)
}