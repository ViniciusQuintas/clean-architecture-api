import { Email } from './email'

describe('Email validation', () => {
  test('should not accept null strings', () => {
    const email = null
    expect(Email.validate(email)).toBeFalsy()
  })

  test('should not accept empty strings', () => {
    const email = ''
    expect(Email.validate(email)).toBeFalsy()
  })

  test('should accept valeue email', () => {
    const email = 'any@mail.com'
    expect(Email.validate(email)).toBeTruthy()
  })

  test('should not accept local part larger then 64n chars', () => {
    const email = `${'l'.repeat(65)}@mail.com`
    expect(Email.validate(email)).toBeFalsy()
  })
})
