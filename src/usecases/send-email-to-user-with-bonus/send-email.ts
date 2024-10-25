import { SendEmailResponse } from './send-email-response'
import { UserData } from '@/entities/'

export interface SendEmail {
  sendEmailToUserWithBonus: (user: UserData) => Promise<SendEmailResponse>
}
