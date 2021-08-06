/**
 * @jest-environment ./prisma/prisma-environment-jest
 */
import { app } from '@infra/http/app';
import Request from 'supertest'
import { prisma } from '@prismadb/client'

describe('Show ShortUrl Controller', () => {
  afterAll(async () => {
    await prisma.$disconnect()
  })

  it('GET - /urls should to able acess shortener url', async () => {
    const { body } = await Request(app).post('/api/urls').send({
      destination: 'https://www.1001tracklists.com'
    });

    const response = await Request(app).get(`/api/urls/${body.shortId}`)

    expect(response.status).toBe(200)
  })

  it('GET - /urls should not to able acess shortener url', async () => {
    const response = await Request(app).get('/api/urls/shortIdnotexisting')

    expect(response.status).toBe(400)
  })
})
