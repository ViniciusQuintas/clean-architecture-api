/* eslint-disable @typescript-eslint/promise-function-async */
import { InvalidEmailError, InvalidNameError } from '@/entities/errors/'
import { User, UserData } from '@/entities'
import { Either, left, right } from '@/shared'
import { UserRepository } from '@/usecases/register-user-on-mailing-list/ports'
import { UseCase } from '../ports'

export class RegisterUserOrMailingList implements UseCase {
  private readonly userRepo: UserRepository

  constructor (userRepo: UserRepository) {
    this.userRepo = userRepo
  }

  public async perform (request: UserData): Promise<Either<InvalidNameError | InvalidEmailError, UserData>> {
    const userOrError: Either<InvalidNameError | InvalidEmailError, User> = User.create(request)
    if (userOrError.isLeft()) {
      return left(userOrError.value)
    }

    if (!(await this.userRepo.exists(request))) {
      await this.userRepo.add(request)
    }

    return right(request)
  }
}
