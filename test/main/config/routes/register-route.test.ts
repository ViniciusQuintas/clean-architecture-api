/* eslint-disable @typescript-eslint/no-misused-promises */
import request from 'supertest'
import app from '@/main/config/app'

describe('register route', () => {
  test('should retunr an account on success', async () => {
    app.post('/test_cors', (req, res) => {
      res.send()
    })
    await request(app)
      .post('/api/register')
      .send({
        name: 'Any name',
        email: 'any@mail.com'
      })
      .expect(201)
  })
})
