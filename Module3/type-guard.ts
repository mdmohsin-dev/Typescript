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


    const getUser = (user: NormalUser | AdminUser)=>{
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

}