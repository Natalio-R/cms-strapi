export default ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      connectionString: env('POSTGRES_URL'), 
      ssl: env.bool('DATABASE_SSL', true),
    },
    pool: { min: env.int('DATABASE_POOL_MIN', 2), max: env.int('DATABASE_POOL_MAX', 10) },
  },
});