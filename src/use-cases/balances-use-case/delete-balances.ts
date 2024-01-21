import { Saldos } from "@prisma/client";
import { BalancesRepository } from "../../repositories/balance-repository";

interface DeleteBalancesUseCaseRequest {
  balancesID: string;
}

interface DeleteBalancesUseCaseResponse {
  balances: Saldos;
}

export class DeleteBalancesUseCase {
  constructor(private balancesRepository: BalancesRepository) {}

  async execute({
    balancesID,
  }: DeleteBalancesUseCaseRequest): Promise<DeleteBalancesUseCaseResponse> {
    const BalancesDelete = await this.balancesRepository.deleteBalances(
      balancesID
    );

    return {
      balances: BalancesDelete,
    };
  }
}
