import pg from 'pg'
const { Client } = pg

const client = new Client({
  user: 'u_c628671e_7238_482a_bfa1_3996cf3506de',
  password: '2oEe0Mv5B1le5o69Ub4SguJt9246cCWmK1L33jA5Ldr0Qo96D1vh',
  host: 'pg.rapidapp.io',
  port: 5433,
  database: 'db_c628671e_7238_482a_bfa1_3996cf3506de',
  ssl: {
    rejectUnauthorized: false
  }
})

async function checkDatabaseConnection() {
  try {
    await client.connect()
    const result = await client.query('SELECT NOW()')
    console.log('✅ PostgreSQL Server Status: ACTIVE')
    console.log('🕒 Server Time:', result.rows[0].now)
    return true
  } catch (error) {
    console.log('❌ PostgreSQL Server Status: INACTIVE')
    console.log('Error Details:', error.message)
    return false
  } finally {
    await client.end()
  }
}

checkDatabaseConnection()
