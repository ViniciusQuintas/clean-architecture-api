import { RegisterUserOrMailingList } from '@/usecases/register-user-on-mailing-list'
import { RegisterUserController } from '@/web-controllers'
import { MongodbUserRepository } from '@/external/repositories/mongodb'

export const makeRegisterUserController = (): RegisterUserController => {
  const mongoDbUserRepository = new MongodbUserRepository()
  const registerUserOnMailingListUseCase = new RegisterUserOrMailingList(mongoDbUserRepository)
  const registerUserControlller = new RegisterUserController(registerUserOnMailingListUseCase)
  return registerUserControlller
}
