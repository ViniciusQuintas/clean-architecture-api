import { RegisterUserOrMailingList } from '@/usecases/register-user-on-mailing-list'
import { RegisterUserController } from '@/web-controllers'
import { InMemoryUserRepository } from '@test/usecases/register-user-on-mailing-list/repository'

export const makeRegisterUserController = (): RegisterUserController => {
  const inMemoryUserRepository = new InMemoryUserRepository([])
  const registerUserOnMailingListUseCase = new RegisterUserOrMailingList(inMemoryUserRepository)
  const registerUserControlller = new RegisterUserController(registerUserOnMailingListUseCase)
  return registerUserControlller
}
