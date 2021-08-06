/**
 * @jest-environment ./prisma/prisma-environment-jest
 */
import { app } from '@infra/http/app';
import Request from 'supertest'
import {prisma} from '@prismadb/client'

describe('Create ShortURL Controller', () => {
  afterAll(async () => {
    await prisma.$disconnect()
  })

  it('POST - /urls should to able create a short url', async () => {
    const response = await Request(app).post('/api/urls').send({
      destination: 'https://www.1001tracklists.com'
    });

    expect(response.status).toBe(200)
    expect(response.body).toHaveProperty('shortId')
  });

  it('POST - /urls should not to able create a short url with empty', async () => {
    const response = await Request(app).post('/api/urls').send({});

    expect(response.status).toBe(400)
    expect(response.body.message).toBe("Destination is required")
  })
})
