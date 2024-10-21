/* eslint-disable @typescript-eslint/no-extraneous-class */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
export class Email {
  static validate (email: string): boolean {
    if (!email) {
      return false
    }

    return true
  }
}
