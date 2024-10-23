import { RegisterUserOrMailingList } from '@/usecases/register-user-on-mailing-list/'
import { HttpRequest } from './ports'
import { HttpResponse } from './ports/'
import { UserData } from '@/entities'
import { created } from '@/web-controllers/utils'

export class RegisterUserController {
  private readonly usecase: RegisterUserOrMailingList

  constructor (usecase: RegisterUserOrMailingList) {
    this.usecase = usecase
  }

  public async handle (request: HttpRequest): Promise<HttpResponse> {
    const userData: UserData = request.body
    const response = await this.usecase.registerUserOrMailingList(userData)

    if (response.isRight()) {
      return created(response.value)
    }
  }
}
