import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
await prisma.user.create({
  data :{
    email:"rohitkumarbarada@gmail.com",
    name:"Rohit Kumar"
  }
})
}

main()
  