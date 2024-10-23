/* eslint-disable @typescript-eslint/no-extraneous-class */
import { Either, left, right } from '@/shared/'
import { InvalidEmailError, InvalidNameError } from '@/entities/errors/'
import { UserData, Name, Email } from '@/entities'

export class User {
  public readonly name: Name
  public readonly email: Email

  private constructor (name: Name, email: Email) {
    this.name = name
    this.email = email
  }

  static create (userData: UserData): Either<InvalidNameError | InvalidEmailError, User> {
    const nameOrError = Name.create(userData.name)
    if (nameOrError.isLeft()) {
      return left(new InvalidNameError(userData.name))
    }

    const emailOrError = Email.create(userData.email)
    if (emailOrError.isLeft()) {
      return left(new InvalidEmailError(userData.email))
    }

    const name: Name = nameOrError.value
    const email: Email = emailOrError.value

    return right(new User(name, email))
  }
}
