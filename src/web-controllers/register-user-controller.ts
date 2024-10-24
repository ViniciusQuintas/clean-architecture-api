/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { RegisterUserOrMailingList } from '@/usecases/register-user-on-mailing-list/'
import { HttpRequest } from './ports'
import { HttpResponse } from './ports/'
import { UserData } from '@/entities'
import { badRequest, created } from '@/web-controllers/utils'
import { MissingParamError } from './errors/missing-param-erro'

export class RegisterUserController {
  private readonly usecase: RegisterUserOrMailingList

  constructor (usecase: RegisterUserOrMailingList) {
    this.usecase = usecase
  }

  public async handle (request: HttpRequest): Promise<HttpResponse> {
    if (!(request.body.name) || !(request.body.email)) {
      let missingParam = !(request.body.name) ? 'name ' : ''
      missingParam += !(request.body.email) ? 'email' : ''
      return badRequest(new MissingParamError(missingParam.trim()))
    }

    const userData: UserData = request.body
    const response = await this.usecase.registerUserOrMailingList(userData)

    if (response.isLeft()) {
      return badRequest(response.value)
    }

    if (response.isRight()) {
      return created(response.value)
    }
  }
}
