/* eslint-disable @typescript-eslint/require-await */
/* eslint-disable @typescript-eslint/promise-function-async */
import { UserRepository } from '../ports/user-repostirory'
import { UserData } from '../user-data'

export class InMemoryUserRepository implements UserRepository {
  private readonly repository: UserData[]

  constructor (repository: UserData[]) {
    this.repository = repository
  }

  async add (user: UserData): Promise<void> {
    const exists = await this.exists(user)
    if (!exists) {
      this.repository.push(user)
    }
  }

  async findUserByEmail (email: string): Promise<UserData> {
    const found = this.repository.find(user => user.email === email)
    return found === undefined ? null : found
  }

  async findAllUsers (): Promise<UserData[]> {
    return this.repository
  }

  async exists (user: UserData): Promise<boolean> {
    if (await this.findUserByEmail(user.email) === null) {
      return false
    }
    return true
  }
}
