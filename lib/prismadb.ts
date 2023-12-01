import {PrismaClient} from '@prisma/client'

declare global {
    var prisma : PrismaClient |undefined ;
}

const prismadb = globalThis.prisma  || new PrismaClient();
if(process.env.NODE_EN !== 'production') globalThis.prisma = prismadb;

export default prismadb;