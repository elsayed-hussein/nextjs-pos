import { PrismaClient } from "@prisma/client";

const globalForPrisma = global as unknown as {
  prisma: PrismaClient;
};
// const globalForPrisma = global;

const prisma = globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export default prisma;

// import { PrismaBetterSQLite3 } from "@prisma/adapter-better-sqlite3";
// import { PrismaClient } from "@prisma/client";

// const adapter = new PrismaBetterSQLite3({
//   url: "file:./prisma/dev.db",
// });
// const prisma = new PrismaClient({ adapter });

// import { PrismaBetterSQLite3 } from "@prisma/adapter-better-sqlite3";
// import { PrismaClient } from "@prisma/client";

// const adapter = new PrismaBetterSQLite3(
//   {
//     url: "file:./prisma/dev.db",
//   },
//   {
//     timestampFormat: "unixepoch-ms",
//   }
// );
// const prisma = new PrismaClient({ adapter });
// export default prisma;
