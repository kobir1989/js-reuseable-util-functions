import { isValidEmail } from '@src/validartors/isValidEmail'
import { isPasswordMatched } from '@src/validartors/isPasswordMatched'
import { isValidURL } from '@src/validartors/isValidURL'
import { isValidPhoneNumber } from '@src/validartors/isValidPhoneNumber'
import { isValidDate } from '@src/validartors/isValidDate'
import { isStrongPassword } from '@src/validartors/isStrongPassword'
import { isValidUserName } from '@src/validartors/isValidUserName'
import { isValidFileExtension } from './validartors/isValidFileExtention'
import { truncatedString } from '@src/util-functions/string-manipulation/truncateString'

export {
  isValidEmail,
  isPasswordMatched,
  isValidURL,
  isValidPhoneNumber,
  isValidDate,
  isStrongPassword,
  isValidUserName,
  isValidFileExtension,
  truncatedString
}
