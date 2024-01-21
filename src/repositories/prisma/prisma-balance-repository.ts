import { Prisma } from "@prisma/client";
import { BalancesRepository } from "../balance-repository";
import { prisma } from "../../lib/prisma";

export class PrismaBalanceRepository implements BalancesRepository {
  async create(data: Prisma.SaldosUncheckedCreateInput) {
    const balance = await prisma.saldos.create({
      data,
    });

    return balance;
  }
  async getBalances() {
    const balance = await prisma.saldos.findMany();

    return balance;
  }
  async deleteBalances(balanceId: string) {
    const balance = await prisma.saldos.delete({
      where: {
        id: balanceId,
      },
    });

    return balance;
  }
  async updateBalances(balanceId: string, newName: string) {
    const balance = await prisma.saldos.update({
      where: {
        id: balanceId,
      },
      data: {
        nome: newName,
      },
    });

    return balance;
  }
}
