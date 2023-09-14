import { PrismaClient } from "@prisma/client";

//  Instantiate singleton - allows for only 1 single client to be created no matter how many times prisma variable is accessed
//  Useful for HMR (hot module reloading)

//  Add Prisma Client to global object
const globalForPrisma = global as unknown as {
  prisma: PrismaClient | undefined;
};

//  Create prisma variable
export const prisma =
  //  Recall: nullish coalescing operator (??) returns right side if left side is null/undefined
  globalForPrisma.prisma ??
  new PrismaClient({
    log: ["query"],
  });

//  When not in prod, get prisma from global variable
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
