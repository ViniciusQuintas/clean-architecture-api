/* eslint-disable @typescript-eslint/require-await */
import { InvalidEmailError } from '../../entities/errors/invalid-email-error'
import { UserData } from '../../entities/user-data'
import { left } from '../../shared/either'
import { UserRepository } from './ports/user-repostirory'
import { RegisterUserOrMailingList } from './register-user-on-mailing-list'
import { InMemoryUserRepository } from './repository/in-memory-user-repository'

describe('Register user on mailing list', () => {
  test('should add user with complete data to mailing list', async () => {
    const users: UserData[] = []
    const repo: UserRepository = new InMemoryUserRepository(users)
    const usecase: RegisterUserOrMailingList = new RegisterUserOrMailingList(repo)
    const name = 'any_name'
    const email = 'any@mail.com'
    const response = await usecase.registerUserOrMailingList({ name, email })
    const user = repo.findUserByEmail('any@mail.com')
    expect((await user).name).toBe('any_name')
    expect(response.value.name).toBe('any_name')
  })

  test('should not add user with invalid email to mailing list', async () => {
    const users: UserData[] = []
    const repo: UserRepository = new InMemoryUserRepository(users)
    const usecase: RegisterUserOrMailingList = new RegisterUserOrMailingList(repo)
    const name = 'any_name'
    const invalidemail = 'invalid_email'
    const response = await usecase.registerUserOrMailingList({ name: name, email: invalidemail })
    const user = await repo.findUserByEmail(invalidemail)
    expect(user).toBeNull()
    expect(response).toEqual(left(new InvalidEmailError()))
  })
})
