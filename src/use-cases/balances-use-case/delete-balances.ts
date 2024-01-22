import { Saldos } from "@prisma/client";
import { BalancesRepository } from "../../repositories/balance-repository";

interface DeleteBalancesUseCaseRequest {
  balanceId: string;
}

interface DeleteBalancesUseCaseResponse {
  balances: Saldos;
}

export class DeleteBalancesUseCase {
  constructor(private balancesRepository: BalancesRepository) {}

  async execute({
    balanceId,
  }: DeleteBalancesUseCaseRequest): Promise<DeleteBalancesUseCaseResponse> {
    const BalancesDelete = await this.balancesRepository.deleteBalances(
      balanceId
    );

    return {
      balances: BalancesDelete,
    };
  }
}
