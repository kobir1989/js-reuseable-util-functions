import { isValidUserName } from '../../src/validartors/isValidUserName'

describe('isValidUserName validator function', () => {
  it('should return true for a valid username', () => {
    const validUsernames = ['john_doe123', 'user_name', 'myUsername']
    validUsernames.forEach(username => {
      expect(isValidUserName(username)).toBe(true)
    })
  })

  it('should return false for a username with spaces', () => {
    const invalidUsernames = ['user name', 'user  name', ' user_name ']
    invalidUsernames.forEach(username => {
      expect(isValidUserName(username)).toBe(false)
    })
  })

  it('should return false for a username with special characters', () => {
    const invalidUsernames = ['user@name', 'user#name', 'user$name']
    invalidUsernames.forEach(username => {
      expect(isValidUserName(username)).toBe(false)
    })
  })

  it('should return false for a too short username', () => {
    const invalidUsernames = ['ab', '']
    invalidUsernames.forEach(username => {
      expect(isValidUserName(username)).toBe(false)
    })
  })

  it('should return false for a too long username', () => {
    const invalidUsername = 'toolongusername1234567890'
    expect(isValidUserName(invalidUsername)).toBe(false)
  })

  it('should return false for usernames containing disallowed words', () => {
    const disallowedWords = ['admin', 'root', 'password']
    const invalidUsernames = ['admin123', 'myroot', 'PasswordUser']
    invalidUsernames.forEach(username => {
      expect(isValidUserName(username, disallowedWords)).toBe(true)
    })
  })

  it('should return true for valid usernames even if they contain disallowed words', () => {
    const disallowedWords = ['admin', 'root', 'password']
    const validUsernames = ['useradmin', 'userroot', 'userpassword']
    validUsernames.forEach(username => {
      expect(isValidUserName(username, disallowedWords)).toBe(true)
    })
  })

  it('should return false for invalid usernames if they contain disallowed words', () => {
    const disallowedWords = ['admin', 'root', 'password']
    const validUsernames = ['admin', 'root', 'password']
    validUsernames.forEach(username => {
      expect(isValidUserName(username, disallowedWords)).toBe(false)
    })
  })
})
