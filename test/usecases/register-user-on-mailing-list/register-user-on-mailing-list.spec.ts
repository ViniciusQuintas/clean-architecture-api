/* eslint-disable @typescript-eslint/require-await */
import { UserData } from '../../../src/entities/user-data'
import { UserRepository } from '../../../src/usecases/register-user-on-mailing-list/ports/user-repostirory'
import { RegisterUserOrMailingList } from '../../../src/usecases/register-user-on-mailing-list/register-user-on-mailing-list'
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
    const response = (await usecase.registerUserOrMailingList({ name: name, email: invalidemail })).value as Error
    const user = await repo.findUserByEmail(invalidemail)
    expect(user).toBeNull()
    expect(response.name).toEqual('InvalidEmailError')
  })

  test('should not add user with invalid name to mailing list', async () => {
    const users: UserData[] = []
    const repo: UserRepository = new InMemoryUserRepository(users)
    const usecase: RegisterUserOrMailingList = new RegisterUserOrMailingList(repo)
    const invalidname = ''
    const email = 'any@mail.com'
    const response = (await usecase.registerUserOrMailingList({ name: invalidname, email: email })).value
    const user = await repo.findUserByEmail(email)
    expect(user).toBeNull()
    expect(response.name).toEqual('InvalidNameError')
  })
})
