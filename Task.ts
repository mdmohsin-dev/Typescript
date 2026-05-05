// Task-1
const user = (name: string, age: number, role?: 'admin' | 'user' | 'guest') => {
    console.log(`
 User Info
------------------------
Name : ${name}
Age  : ${age}
Role : ${role ?? 'Not Provided'}
`);
}

user('Mohsin', 22, 'admin');