import { Module } from '@nestjs/common';
import { User } from '@/infra/entities';
import {
  CreateUserUseCase,
  FindAllUsersUseCase,
  FindUserUseCase,
} from '@/use-cases';
import { UserResolver } from '@/resolvers';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from './infra/repositories';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [
    // Resolvers
    UserResolver,

    // Use cases
    FindUserUseCase,
    FindAllUsersUseCase,
    CreateUserUseCase,

    // Repositories
    UserRepository,
  ],
})
export class UsersModule {}
