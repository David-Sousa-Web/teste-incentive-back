import { Pagamentos } from "@prisma/client";
import { PaymentsRepository } from "../../repositories/payments-repository";

interface DeletePaymentUseCaseRequest {
  paymentID: string;
}

interface DeletePaymentUseCaseResponse {
  payment: Pagamentos;
}

export class DeletePaymentUseCase {
  constructor(private PaymentsRepository: PaymentsRepository) {}

  async execute({
    paymentID,
  }: DeletePaymentUseCaseRequest): Promise<DeletePaymentUseCaseResponse> {
    const paymentDelete = await this.PaymentsRepository.deletePayments(
      paymentID
    );

    return {
      payment: paymentDelete,
    };
  }
}
