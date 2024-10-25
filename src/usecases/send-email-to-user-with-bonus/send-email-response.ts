import { Either } from '@/shared/either'
import { MailServiceError } from '@/usecases/errors/mail-service-error'
import { EmailOptions } from '@/usecases/send-email-to-user-with-bonus/ports/emaill-service'

export type SendEmailResponse = Either<MailServiceError, EmailOptions>
