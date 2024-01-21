import { Request, Response } from "express";
import { PrismaBalanceRepository } from "../../repositories/prisma/prisma-balance-repository";
import { DeleteBalancesUseCase } from "../../use-cases/balances-use-case/delete-balances";

export async function DeletePayment(req: Request, res: Response) {
  const balancesID = req.params.balanceID;

  try {
    const balanceRepository = new PrismaBalanceRepository();
    const balanceUseCase = new DeleteBalancesUseCase(balanceRepository);

    await balanceUseCase.execute({
      balancesID,
    });

    res.status(200).json({ message: "Successfully Deleted Payment" });
  } catch (error) {
    console.log(error);

    res.status(500).json({ message: "Internal server error" });
  }
}
