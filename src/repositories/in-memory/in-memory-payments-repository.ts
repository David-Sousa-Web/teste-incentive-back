import { Pagamentos, Prisma } from "@prisma/client";
import { PaymentsRepository } from "../payments-repository";
import { randomUUID } from "crypto";

export class InMemoryPaymentsRepository implements PaymentsRepository {
  public items: Pagamentos[] = [];

  async create(data: Prisma.PagamentosUncheckedCreateInput) {
    const payments = {
      id: randomUUID(),
      nome: data.nome,
      descricao: data.descricao,
      valor: data.valor,
      saldos_Id: data.saldos_Id,
    };

    this.items.push(payments);

    return payments;
  }

  async getPayments(): Promise<Pagamentos[]> {
    return this.items;
  }

  async deletePayments(paymentID: string) {
    const indexPayment = this.items.findIndex(
      (payment) => payment.id === paymentID
    );

    if (indexPayment !== -1) {
      this.items.splice(indexPayment, 1);

      return Promise.resolve({
        success: true,
        message: "Pagamento excluído com sucesso.",
      });
    } else {
      return Promise.resolve({
        success: false,
        message: "Pagamento não encontrado.",
      });
    }
  }

  async updatePayments(
    paymentID: string,
    newName: string
  ): Promise<Pagamentos> {
    const paymentIndex = this.items.findIndex(
      (payment) => payment.id === paymentID
    );

    if (paymentIndex !== -1) {
      const updatedPayment: Pagamentos = {
        ...this.items[paymentIndex],
        nome: newName,
      };

      this.items[paymentIndex] = updatedPayment;

      return updatedPayment;
    }

    throw new Error("Payment not found");
  }
}
