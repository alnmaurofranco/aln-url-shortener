const { promisify} = require('util')
const { exec } = require('child_process')
const path = require('path')
const NodeEnvJest = require('jest-environment-node')
const { v4: uuid } = require('uuid')
const { Client } = require('pg')

require('dotenv').config({
  path: path.resolve(__dirname, '..', '.env.test')
})

const PrismaCli = './node_modules/.bin/prisma'
const execSync = promisify(exec)

class PrismaEnvironment extends NodeEnvJest {

  constructor(config) {
    super(config)

    const dbHost = process.env.PRISMA_HOST
    const dbPort = process.env.PRISMA_PORT
    const dbUser = process.env.PRISMA_USER
    const dbPass = process.env.PRISMA_PASS
    const dbName = process.env.PRISMA_DATABASE

    this.schema = `schema_tests_${uuid()}`
    this.connectionString = `postgresql://${dbUser}:${dbPass}@${dbHost}:${dbPort}/${dbName}?schema=${this.schema}`
  }

  async setup() {
    process.env.DATABASE_URL = this.connectionString
    this.global.process.env.DATABASE_URL = this.connectionString

    await execSync(`${PrismaCli} migrate deploy`)
  }

  async teardown() {
    const client = new Client({
      connectionString: this.connectionString
    })

    await client.connect()
    await client.query(`DROP SCHEMA IF EXISTS "${this.schema}" CASCADE`)
    await client.end()
  }
}

module.exports = PrismaEnvironment
