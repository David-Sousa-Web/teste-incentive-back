import { Pagamentos } from "@prisma/client";
import { PaymentsRepository } from "../../repositories/payments-repository";

interface CreatePaymentUseCaseRequest {
  nome: string;
  descricao: string;
  valor: number;
  saldos_Id: string;
}

interface CreatePaymentUseCaseResponse {
  payment: Pagamentos;
}

export class CreatePaymentUseCase {
  constructor(private PaymentsRepository: PaymentsRepository) {}

  async execute({
    nome,
    descricao,
    valor,
    saldos_Id,
  }: CreatePaymentUseCaseRequest): Promise<CreatePaymentUseCaseResponse> {
    const payment = await this.PaymentsRepository.create({
      nome,
      descricao,
      valor,
      saldos_Id,
    });

    return {
      payment,
    };
  }
}
