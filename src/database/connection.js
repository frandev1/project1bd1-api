import sql from 'mssql';

const dbConfig = {
    user: 'user1',
    password: '1234',
    server: 'FVRL',
    database: 'PROYECT1JF',
    options: {
        encrypt: true,
        trustServerCertificate: true
    }
};

export async function getConnection() {
    try {
        const pool = await sql.connect(dbConfig);
        return pool;
    } catch (error) {
        console.error(error);
    }
}