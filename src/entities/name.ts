/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/no-extraneous-class */
import { Either, left, right } from '@/shared/'
import { InvalidNameError } from '@/entities/errors/'

export class Name {
  public readonly value: string

  private constructor (name: string) {
    this.value = name
  }

  public static create (name: string): Either<InvalidNameError, Name> {
    if (!Name.validade(name)) {
      return left(new InvalidNameError(name))
    }

    return right(new Name(name))
  }

  public static validade (name: string): boolean {
    if (!name) {
      return false
    }

    if (name.trim().length < 2 || name.trim().length > 256) {
      return false
    }

    return true
  }
}
