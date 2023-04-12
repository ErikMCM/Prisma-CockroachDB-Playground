import { PrismaClient, Action, Audit } from '@prisma/client'
const prisma = new PrismaClient()


// let user_new = await prisma.user.create({
//     data: {
//         email: 'help5@test.com',
//         name: 'WEEE',
//     }
// })

// await prisma.audit.create({
//     data: {
//         userId: user_new.id,
//         action: Action.modify,
//         description: 'Test',
//     }
// })
        


const user = await prisma.user.findMany({}) 
const audit = await prisma.audit.findMany({
    include: {
        user: true
    }
})

console.log(user)
console.log("----------")
console.log(audit)