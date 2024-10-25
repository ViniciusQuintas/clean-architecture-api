/* eslint-disable @typescript-eslint/require-await */
import { MongodbUserRepository } from '@/external/repositories/mongodb'
import { MongoHelper } from '@/external/repositories/mongodb/helper'

describe('Mongodb User repository', () => {
  beforeAll(async () => {
    await MongoHelper.connect(process.env.MONGO_URL)
  })

  afterAll(async () => {
    await MongoHelper.disconnect()
  })

  beforeEach(async () => {
    MongoHelper.clearCollection('users')
  })

  test('when user is added, it should exist', async () => {
    const userRepository = new MongodbUserRepository()
    const user = {
      name: 'any_name',
      email: 'any_email@mail.com'
    }
    await userRepository.add(user)
    expect(await userRepository.exists(user)).toBeTruthy()
  })

  test('find all should return all added users', async () => {
    const sut = new MongodbUserRepository()
    await sut.add({
      name: 'any_name',
      email: 'any_email@mail.com'
    })
    await sut.add({
      name: 'a_second_name',
      email: 'a_second_email@mail.com'
    })
    const users = await sut.findAllUsers()
    expect(users[0].name).toEqual('any_name')
    expect(users[1].name).toEqual('a_second_name')
  })
})
