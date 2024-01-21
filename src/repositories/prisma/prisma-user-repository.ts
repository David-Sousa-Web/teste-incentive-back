import { Prisma } from "@prisma/client";
import { UserRepository } from "../user-repository";
import { prisma } from "../../lib/prisma";

export class PrismaUserRepository implements UserRepository {
  async create(data: Prisma.UserUncheckedCreateInput) {
    const user = await prisma.user.create({
      data,
    });

    return user;
  }
}
