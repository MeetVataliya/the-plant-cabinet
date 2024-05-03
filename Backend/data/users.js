//import bcrypt from "bcryptjs"
const users =[
        {
                name:"aaa",
                email:"aaa@gmail.com",
                password:bcrypt.hashSync("1234",10),
                isAdmin:true
        },
        {
                name:"person2",
                email:"person2@gmail.com",
                password:bcrypt.hashSync("1234",10),
               
        }
]

export default users