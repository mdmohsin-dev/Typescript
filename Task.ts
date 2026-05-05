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




// TASK-3
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
console.log(person)


