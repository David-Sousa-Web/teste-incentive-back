import { Request, Response } from "express";
import { PrismaPaymentRepository } from "../../repositories/prisma/prisma-payment-repository";
import { CreatePaymentUseCase } from "../../use-cases/create-payments";
import { z } from "zod";

export async function CreatePayment(req: Request, res: Response) {
  const paymentBodySchema = z.object({
    nome: z.string(),
    descricao: z.string(),
    valor: z.number(),
    saldos_Id: z.string(),
  });

  const { nome, descricao, valor, saldos_Id } = paymentBodySchema.parse(
    req.body
  );

  try {
    const paymentRepository = new PrismaPaymentRepository();
    const paymentUseCase = new CreatePaymentUseCase(paymentRepository);

    await paymentUseCase.execute({
      nome,
      descricao,
      valor,
      saldos_Id,
    });

    res.status(201).json({ message: "Successfully created Payment" });
  } catch (error) {
    console.log(error);

    res.status(500).json({ message: "Error while created Payments." });
  }
}
