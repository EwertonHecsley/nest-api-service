import 'dotenv/config';
import knex from 'knex';


const connectionConfig = knex({
    client: 'pg',
    connection: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        database: process.env.DB_DATABASE,
        password: process.env.DB_PASSWORD,
        port: process.env.DB_PORT as unknown as number
    }
});

export default connectionConfig;
