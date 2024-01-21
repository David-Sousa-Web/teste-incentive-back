import { BalancesRepository } from "../../repositories/balance-repository";

interface UpdateBalanceUseCaseRequest {
  balanceID: string;
  newName: string;
}

export class UpdateBalanceUseCase {
  constructor(private balancesRepository: BalancesRepository) {}

  async execute({ balanceID, newName }: UpdateBalanceUseCaseRequest) {
    try {
      const Balance = await this.balancesRepository.updateBalances(
        balanceID,
        newName
      );

      return {
        Balance,
      };
    } catch (error) {
      return console.log(error);
    }
  }
}
