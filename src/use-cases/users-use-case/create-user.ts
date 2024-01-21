import { User } from "@prisma/client";
import { UserRepository } from "../../repositories/user-repository";

interface CreateUserUseCaseRequest {
  user: string;
  email: string;
  senha: string;
}

interface CreateUserUseCaseResponse {
  users: User;
}

export class CreateUserUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute({
    user,
    email,
    senha,
  }: CreateUserUseCaseRequest): Promise<CreateUserUseCaseResponse> {
    const users = await this.userRepository.create({
      user,
      email,
      senha,
    });

    return {
      users,
    };
  }
}
