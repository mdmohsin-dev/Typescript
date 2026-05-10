{

    class Student {
        name: string;
        age: number;
        address: string;

        constructor(name: string, age: number, address: string) {
            this.name = name, this.age = age, this.address = address
        }

        getSleep(hours: number) {
            console.log(`${this.name} is sleeping for ${hours} hours`)
        }
    }


    // Instance
    const student1 = new Student('Mr x', 18, 'Kishoreganj')
    console.log(student1)
    student1.getSleep(4)



    class Teacher {
        name: string;
        age: number;
        address: string;
        designation: string

        constructor(name: string, age: number, address: string, designation: string) {
            this.name = name, this.age = age, this.address = address, this.designation = designation
        }

        getSleep(hours: number) {
            console.log(`${this.name} is sleeping for ${hours} hours`)
        }

        takeClass(numOfClass: number) {
            console.log(`${this.name} will take ${numOfClass}`)
        }
    }


     const teacher1 = new Teacher('Mr teacher', 18, 'Dhaka','Professors')
}