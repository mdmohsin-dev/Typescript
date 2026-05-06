{
    // Task-1
    const user = (name: string, age: number, role?: 'admin' | 'user' | 'guest') => {
        //     console.log(`
        //  User Info
        // ------------------------
        // Name : ${name}
        // Age  : ${age}
        // Role : ${role ?? 'Not Provided'}
        // `);
    }
    user('Mohsin', 22, 'admin');




    // TASK-2
    type Person = {
        name: string;
        address: string,
        hairColor: string;
        income: number,
        expense: number,
        familyMembers: number,
        skills: string[],
        maritalStatus: boolean;
    }

    const person: Person = {
        name: 'Mohsin',
        address: 'Kishoreganj',
        hairColor: 'black',
        income: 0,
        expense: 1000,
        familyMembers: 4,
        skills: ['Javascript', 'Typescirpt', 'React', 'Mongodb'],
        maritalStatus: true
    }
    // console.log(person)



    // Task-3
    interface Book {
        title: string;
        author: string,
        pages: number
    }
    interface Magazine {
        title: string;
        issueNumber: number;
        publisher: string;
    }

    type BookOrMagazine = Book | Magazine

    type BookAndMagazine = Book & Magazine


    const person1: BookOrMagazine = {
        title: 'Ts guide',
        author: "Mohsin",
        pages: 120
    }

    const person2: BookAndMagazine = {
        title: 'Hybrid Content',
        author: 'Mohsin',
        pages: 200,
        issueNumber: 10,
        publisher: 'ABC'
    }

    // console.log(person1)
    // console.log(person2)





    // Task-4
    const sum = (...numbers: number[]): number => {
        const result = numbers.reduce((acc, cur) => acc + cur, 0)
        return result
    }
    //    console.log( sum(1, 2, 3, 4))





    // Task-5
    const handleInput = (value: string | number): number => {
        if (typeof value === 'string') {
            return value.length
        }
        return value * value
    }
    // console.log(handleInput(5))






    // Task-6

    type User = {
        name: string;
        email: string
    }
    type Admin = {
        adminLevel: number
    }

    type AdminUser = User & Admin

    const describeAdmin = (user: AdminUser): string => {
        return `${user.name} (${user.email}) is an Admin with level ${user.adminLevel}`
    }

    const user2: AdminUser = {
        name: 'Karim',
        email: 'karim@gmail.com',
        adminLevel: 2
    }
    // console.log(describeAdmin(user2))






    // Task-7
    type Employee = {
        name: string;
        address?: {
            city?: string
        }
    }

    const employee: Employee = {
        name: "Rahim",
        address: {
            city: 'Dhaka'
        }
    }

    const getEmployeeCity = (employee: Employee): string | undefined => {
        return employee.address?.city
    }

    console.log(getEmployeeCity(employee))
}